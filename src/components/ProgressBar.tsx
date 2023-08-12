interface ProgressBarProps {
  currentValue: number;
  maxValue: number;
  color: string;
}

export function ProgressBar({
  currentValue,
  maxValue,
  color,
}: ProgressBarProps) {
  const percentage = (currentValue / maxValue) * 100;

  return (
    <div className="progress-bar">
      <div className={color} style={{ width: `${percentage}%` }}></div>
    </div>
  );
}
