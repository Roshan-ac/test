import { Label } from "@/components/ui/label";

const LeadLogs = ({ LogDetails }: { LogDetails: any }) => {
  return (
    <div className="h-max w-full bg-tertiaryBackground pb-4">
      <div className="p-6 text-hoverColor">
        <div>
          <h1>Leads Logs :</h1>
        </div>

        <div className="my-6 flex flex-col space-y-6">
          {LogDetails && LogDetails.data ? (
            <>
              {LogDetails.data.map((item) => (
                <Label
                  key={item.id}
                  htmlFor="terms"
                  className=" grid w-full grid-cols-5 items-center"
                >
                  <p className="inline-block min-w-max">
                    {" "}
                    {item.time} {item.date} :
                  </p>
                  <p className=" col-span-4  w-full  whitespace-pre-wrap text-left leading-6">
                    {item.description}
                  </p>
                </Label>
              ))}
            </>
          ) : (
            <p>No Logs Found !</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LeadLogs;
