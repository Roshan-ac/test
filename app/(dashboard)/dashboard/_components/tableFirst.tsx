import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CircularProgress } from "@nextui-org/progress";
const invoices = [
  {
    No: "01",
    VendorId: "12223233443",
    Requote: "10/20",
    Reschedule: "8/20",
    Complete: "20/20",
    Rate: "100",
  },
];

export function TableFirst() {
  return (
    <div className=" overflow-hidden rounded-xl bg-primaryBackground py-2">
      <div className="m-4">
        <p className=" text-[16px] font-[500] text-primaryText">
          Top Performer{" "}
        </p>
      </div>

      <Table>
        <TableHeader className=" !bg-tertiaryBackground !text-hoverColor">
          <TableRow className="!border-none">
            <TableHead className="w-[100px]">No</TableHead>
            <TableHead>Vendor ID</TableHead>
            <TableHead>Requote</TableHead>
            <TableHead className="text-right">Complete</TableHead>
            <TableHead className="text-right">Reschedule</TableHead>
            <TableHead className="text-right">Rate</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow
              className=" border-none !text-hoverColor"
              key={invoice.No}
            >
              <TableCell className="font-medium">{invoice.No}</TableCell>
              <TableCell>{invoice.VendorId}</TableCell>
              <TableCell>{invoice.Requote}</TableCell>
              <TableCell>{invoice.Complete}</TableCell>
              <TableCell>{invoice.Reschedule}</TableCell>
              <TableCell className="flex text-right gap-2">
                <CircularProgress
                  classNames={{
                    svg: "w-4 h-4 drop-shadow-md",
                    indicator: "stroke-white",
                    track: "stroke-white/10",
                    base:' text-red',
                    value: "text-xs font-semibold text-white",
                  }}
                  value={70}
                  strokeWidth={4}
                  //   showValueLabel={true}
                />
                {invoice.Rate}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
