import { StatusBar } from "@/components/StatusBar"

export const Battle = () => {
  return (
    <article className="w-full h-full flex items-center justify-center">
      <section className="border-2 border-black bg-gray-700 p-2" style={{ width: 720, height: 480 }}>
        <div className="relative h-full bg-gradient-to-t from-green-700 via-lime-200  to-lime-600">
          <StatusBar
            name="ヒョッヒョ"
            level={70}
            maxHp={100}
            currentHp={70}
            isMan={true}
            className="left-4 top-6"
          />
          <StatusBar
            name="ングル"
            level={36}
            maxHp={200}
            currentHp={30}
            isMan={false}
            className="right-4 bottom-32"
          />
        </div>
      </section>
    </article>
  )
}