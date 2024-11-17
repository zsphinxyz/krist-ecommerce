import { CircleDashedIcon} from "lucide-react";

export default function Loading() {
  return(
    <div className="min-w-screen min-h-dvh flex items-center justify-center">
      <CircleDashedIcon className=" text-black animate-spin block [animation-duration:_3s]" />
    </div>
  )
}