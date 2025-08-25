import {
  BookAIcon,
  BoxSelectIcon,
  Calendar,
  Clock,
  InboxIcon,
  StarIcon,
  TrashIcon,
} from "lucide-react";

import MenuItem from "./item";

function Menu() {
  return (
    <nav className="h-svh bg-sidebar min-w-[220px] flex flex-col">
      <ul className="flex flex-col gap-2 flex-1 p-2 pt-4 overflow-x-auto">
        <li>
          {/* Системные проекты */}
          <MenuItem
            title="Входящие"
            count={2}
            icon={<InboxIcon />}
            wrapperColor="bg-transparent text-primary"
            href="/"
            matchPattern="/"
          />
          <div className="h-2 w-full" />
          <MenuItem
            title="Сегодня"
            count={2}
            icon={<StarIcon />}
            wrapperColor="bg-transparent text-yellow-600"
            href="/today"
            matchPattern="/today"
          />
          <MenuItem
            title="Календарь"
            count={0}
            icon={<Calendar />}
            wrapperColor="bg-transparent text-orange-700"
            href="/calendar"
            matchPattern="/calendar"
          />
          <MenuItem
            title="Ожидаемые"
            count={2}
            icon={<Clock />}
            wrapperColor="bg-transparent text-indigo-800"
            href="/awaited"
            matchPattern="/awaited"
          />
          <MenuItem
            title="Когда-нибудь"
            count={2}
            icon={<BoxSelectIcon />}
            wrapperColor="bg-transparent text-cyan-700"
            href="/someday"
            matchPattern="/someday"
          />
          <MenuItem
            title="Архив"
            count={0}
            icon={<BookAIcon />}
            wrapperColor="bg-transparent text-green-700"
            href="/archive"
            matchPattern="/archive"
          />
          <MenuItem
            title="Корзина"
            count={0}
            icon={<TrashIcon />}
            wrapperColor="bg-transparent text-slate-500"
            href="/trash"
            matchPattern="/trash"
          />
          <div className="h-2 w-full" />
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
