import {
  TouchableOpacity,
  Dimensions,
  TouchableOpacityProps,
} from "react-native";
import clsx from "clsx";
import { generateProgressPercentage } from "../../utils/generate-progress-percentage";
import dayjs from "dayjs";

const week_days = 7;
const screen_horizontal_padding = (32 * 2) / 5;

export const day_margin_between = 8;
export const day_size =
  Dimensions.get("screen").width / week_days - (screen_horizontal_padding + 5);

interface HabitDayProps extends TouchableOpacityProps {
  amountofHabits?: number;
  amountCompleted?: number;
  date: Date;
}

export function HabitDay({
  amountofHabits = 0,
  amountCompleted = 0,
  date,
  ...rest
}: HabitDayProps) {
  const amountAccomplishedPercentage =
    amountofHabits > 0
      ? generateProgressPercentage(amountofHabits, amountCompleted)
      : 0;
  const today = dayjs().startOf("day").toDate();
  const isCurrentDay = dayjs(date).isSame(today);
  return (
    <TouchableOpacity
      className={clsx("rounded-lg border-2 m-1", {
        ["bg-zinc-900 border-zinc-800"]: amountAccomplishedPercentage === 0,
        ["bg-violet-900 border-violet-700"]:
          amountAccomplishedPercentage > 0 && amountAccomplishedPercentage < 20,
        ["bg-violet-800 border-violet-600"]:
          amountAccomplishedPercentage >= 20 &&
          amountAccomplishedPercentage < 40,
        ["bg-violet-700 border-violet-500"]:
          amountAccomplishedPercentage >= 40 &&
          amountAccomplishedPercentage < 60,
        ["bg-violet-600 border-violet-500"]:
          amountAccomplishedPercentage >= 60 &&
          amountAccomplishedPercentage < 80,
        ["bg-violet-500 border-violet-400"]: amountAccomplishedPercentage >= 80,
        ["border-white border-4"]: isCurrentDay,
      })}
      style={{ width: day_size, height: day_size }}
      activeOpacity={0.7}
      {...rest}
    />
  );
}
