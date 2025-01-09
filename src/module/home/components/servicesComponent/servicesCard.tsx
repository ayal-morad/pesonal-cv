import { useCallback } from "react";

export function ServicesCard({
  serviceName,
  imagePath,
}: {
  serviceName: string;
  imagePath: string;
}) {
  const handleClick = useCallback(() => {
    // handle the click event
    alert("clicked : " + serviceName);
  }, []);

  return (
    <div
      className="flex flex-col cursor-pointer h-full w-full"
      onClick={() => handleClick()}
    >
      <img
        src={imagePath}
        alt="programingServicePhoto"
        className="w-full h-full object-cover rounded-t-lg"
      />
      <div className="flex justify-center items-center bg-white rounded-b-lg">
        <h1>{serviceName}</h1>
      </div>
    </div>
  );
}
