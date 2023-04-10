interface PropsText {
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

const GradientText: React.FC<PropsText> = ({
  children,
  icon: Icon,
  className,
}) => {
  return (
    <div className={"flex  items-center justify-center gap-1   " + className}>
      {Icon}
      <p className="text-transparent  bg-clip-text bg-gradient  gap-x-1">
        {children}
      </p>
    </div>
  );
};

export default GradientText;
