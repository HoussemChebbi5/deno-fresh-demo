import NavList from "../islands/NavList.tsx";

export function Header(): Element {

    return (
        <>
            <header class="w-[100vw] h-[10rem] bg-black inline-flex justify-between items-center pl-4 pr-4">
                <h1 class="text-white text-2xl">Fresh Demo</h1>
                <NavList />
            </header>
        </>
    )
}