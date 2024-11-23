import HeaderMenu from "../Header_menu";

export default function Header() {
  return (
    <div className="relative h-[840px] bg-white-a700 bg-[url(/images/header-background.png)] bg-cover bg-no-repeat py-2.5 lg:h-auto md:h-auto">
      <div className="h-[680px]">
        <HeaderMenu />
      </div>
      <header className="container-xs absolute left-0 right-0 top-0 flex justify-center lg:px-5 md:px-5"></header>
    </div>
  );
}
