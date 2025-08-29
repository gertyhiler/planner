function ContentWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto my-10 grid max-w-[980px] grid-flow-row gap-7">
      {children}
    </div>
  );
}

export default ContentWrapper;
