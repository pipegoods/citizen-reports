import { Test, TestingModule } from '@nestjs/testing';
import { Report } from '@prisma/client';
import { ReportsService } from './reports.service';
import { PrismaService } from '../prisma/prisma.service';

describe('ReportsService', () => {
  let service: ReportsService;
  let prisma: PrismaService;

  const mockReports: Report[] = [
    {
      id: 1,
      title: 'Test report',
      description: 'Test description for report',
      status: 'pending',
      createdAt: new Date('2025-01-01'),
    },
  ];

  const mockPrismaService = {
    report: {
      findMany: jest.fn().mockResolvedValue(mockReports),
      findUnique: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
      count: jest.fn().mockResolvedValue(1),
    },
  };

  beforeEach(async () => {
    jest.clearAllMocks();
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ReportsService,
        { provide: PrismaService, useValue: mockPrismaService },
      ],
    }).compile();

    service = module.get<ReportsService>(ReportsService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAllReports', () => {
    it('should return paginated reports with meta', async () => {
      const result = await service.findAllReports(1, 10);

      expect(prisma.report.findMany).toHaveBeenCalledWith({
        skip: 0,
        take: 10,
        orderBy: [{ createdAt: 'desc' }, { id: 'desc' }],
      });
      expect(prisma.report.count).toHaveBeenCalled();
      expect(result.reports).toEqual(mockReports);
      expect(result.meta).toMatchObject({
        total: 1,
        page: 1,
        pageSize: 10,
        totalPages: 1,
      });
    });
  });
});
