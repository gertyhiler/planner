import {
  BookAIcon,
  BoxSelectIcon,
  Calendar,
  Clock,
  InboxIcon,
  StarIcon,
  TrashIcon,
} from "lucide-react"

import MenuItem from "./item"

function Menu() {
  return (
    <nav className="h-svh bg-card min-w-[220px] flex flex-col">
      <ul className="flex flex-col gap-2 flex-1 p-2 pt-4 overflow-x-auto">
        <li>
          {/* Системные проекты */}
          <MenuItem
            title="Входящие"
            count={2}
            icon={<InboxIcon />}
            wrapperColor="bg-transparent dark:bg-primary"
            href="/"
            matchPattern="/"
          />
          <div className="h-2 w-full" />
          <MenuItem
            title="Сегодня"
            count={2}
            icon={<StarIcon />}
            wrapperColor="bg-transparent dark:bg-yellow-600"
            href="/today"
            matchPattern="/today"
          />
          <MenuItem
            title="Календарь"
            count={0}
            icon={<Calendar />}
            wrapperColor="bg-transparent dark:bg-orange-700"
            href="/calendar"
            matchPattern="/calendar"
          />
          <MenuItem
            title="Ожидаемые"
            count={2}
            icon={<Clock />}
            wrapperColor="bg-transparent dark:bg-indigo-800"
            href="/awaited"
            matchPattern="/awaited"
          />
          <MenuItem
            title="Когда-нибудь"
            count={2}
            icon={<BoxSelectIcon />}
            wrapperColor="bg-transparent dark:bg-cyan-700"
            href="/someday"
            matchPattern="/someday"
          />
          <MenuItem
            title="Архив"
            count={0}
            icon={<BookAIcon />}
            wrapperColor="bg-transparent dark:bg-green-700"
            href="/archive"
            matchPattern="/archive"
          />
          <MenuItem
            title="Корзина"
            count={0}
            icon={<TrashIcon />}
            wrapperColor="bg-transparent dark:bg-slate-500"
            href="/trash"
            matchPattern="/trash"
          />
          <div className="h-2 w-full" />
        </li>
      </ul>
    </nav>
  )
}

export default Menu
