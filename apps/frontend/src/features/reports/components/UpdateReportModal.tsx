import { useUpdateReport } from "../hooks/useUpdateReport";
import {
  type ReportEntity,
  type ReportStatus,
  updateReportSchema,
  type UpdateReportForm,
  REPORT_STATUS_VALUES,
} from "@citizen-reports/shared";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../../../shared/components/Button";
import { Form } from "../../../shared/components/FormWrapper";
import { Select } from "../../../shared/components/Select";
import { useDialog } from "../../../shared/context/dialogContext";
import { Dialog } from "../../../shared/components/Dialog";
import { useEffect } from "react";
import { toast } from "../../../shared/utils/toast";

export default function UpdateReportModal({
  reportId,
  reports,
  showModal,
  setShowModal,
}: {
  reportId: number | null;
  reports: ReportEntity[];
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const report = reports.find((report) => report.id === reportId);

  return (
    <Dialog shouldOpen={showModal} onOpenChange={setShowModal}>
      {report && (
        <UpdateReportFormUI report={report} reportStatus={report.status} />
      )}
    </Dialog>
  );
}

function UpdateReportFormUI({
  report,
  reportStatus,
}: {
  report: ReportEntity;
  reportStatus: ReportStatus;
}) {
  const { close } = useDialog();
  const { mutate: update, isPending, error } = useUpdateReport(report.id);

  const form = useForm<UpdateReportForm>({
    resolver: zodResolver(updateReportSchema),
    defaultValues: {
      status: reportStatus,
    },
    mode: "onSubmit",
  });

  useEffect(() => {
    form.reset({
      status: report.status,
    });
  }, [report, form]);

  const onSubmit = (data: UpdateReportForm) => {
    update(
      { status: data.status },
      {
        onSuccess: () => {
          close();
          toast.success("Report updated successfully");
        },
        onError: () => {
          toast.error("Error updating report");
        },
      },
    );
  };

  return (
    <Form form={form}>
      <form className="modal-content" onSubmit={form.handleSubmit(onSubmit)}>
        <h2>Update report</h2>

        <h3>{report.title}</h3>

        <Form.Field
          control={form.control}
          name="status"
          render={({ field }) => (
            <Form.Item>
              <Form.Label>Status</Form.Label>
              <Form.Control>
                <Select {...field}>
                  {REPORT_STATUS_VALUES.map((value) => (
                    <Select.Option key={value} value={value}>
                      {value.charAt(0).toUpperCase() + value.slice(1)}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Control>
              <Form.Message />
            </Form.Item>
          )}
        />

        <div className="buttons-group">
          <Button type="submit" disabled={isPending}>
            {isPending ? "Saving..." : "Save"}
          </Button>
          <Button
            className="button-secondary"
            type="button"
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => form.reset()}
          >
            Clear
          </Button>
          <Button className="button-secondary" type="button" onClick={close}>
            Close
          </Button>
        </div>
        {error && <p>Something went wrong: {error.message}</p>}
      </form>
    </Form>
  );
}
