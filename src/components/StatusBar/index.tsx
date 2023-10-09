import classnames from "classnames";

interface Props {
  name: string
  level: number
  maxHp: number
  currentHp: number
  isMan?: boolean
  className?: string
}

export const StatusBar = ({
  name,
  level,
  maxHp,
  currentHp,
  isMan = true,
  className,
}: Props) => {
  return (
    <div
      className={classnames(className, [
        "absolute border-4 border-gray-800 w-64 h-16 bg-orange-100",
        "border rounded-tl-xl rounded-br-xl",
        "shadow-black shadow-md"
      ])}
    >
      <div className="flex justify-between items-center h-8 px-2 pt-1">
        <div className="flex items-center">
          <span>{name}</span>
          <span className={classnames("ml-1", isMan ? "text-blue-500" : "text-pink-500")}>{isMan ? "♂" : "♀"}</span>
        </div>
        <div className="flex">
          <span className="">ＬＶ：</span>
          <span style={{ marginTop: -3 }}>{level}</span>
        </div>
      </div>
      <div className="flex justify-end px-1">
        <section className="w-44">
          <div className="bg-gray-600 w-full h-5 rounded-full flex items-center">
            <span className="block text-sm text-orange-600 font-bold ml-2">ＨＰ</span>
            <div className="rounded-full w-32 ml-1 border-white border-2 h-3">
              <div className="w-1/2 h-full bg-green-500" />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}