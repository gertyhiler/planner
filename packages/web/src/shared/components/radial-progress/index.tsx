import clsx from "clsx";

import classes from "./radial-progress.module.css";

function RadialProgress({
  progress = 0,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { progress?: number }) {
  return (
    <>
      <div
        className={clsx(classes["radial-progress"], className)}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        style={{ "--value": `${progress}`, "--size": "1.5rem", "--thickness": ".1rem" }}
        {...props}></div>
    </>
  );
}

export default RadialProgress;
