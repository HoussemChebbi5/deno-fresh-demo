import { Handlers, PageProps } from "$fresh/server.ts";
import { Header } from "../components/Header.tsx";
import {HOME_FRESH_DESC} from "../static/home-content.ts";
import {Blog} from "../models/blog.interface.ts";

export const handler: Handlers<Blog[] | null> = {
    async GET(_, ctx): Promise<Response> {
        const url = 'https://dev.to/api/articles?username=paulmojicatech';
        const resp: Response = await fetch(url);
        if (!resp.ok) return ctx.render();
        const blogs: any = await resp.json();
        return ctx.render(blogs);
    }
}
export default function Home( { data }: PageProps<Blog[] | null>): Element {
    return (
    <>
        <Header />
        <section class="w-[100vw] h-[75vh] inline-flex justify-around mt-[5rem]">
            <div class="w-[40%] rounded border-2 p-4">
                <h1 class="text-2xl">What is Fresh ?</h1>
                <p class="text-justify">{HOME_FRESH_DESC}</p>
            </div>
            <div class="w-[40%] overflow-scroll">
                {
                    data.map(blog => (
                        <>
                            <img src={blog.social_image}/>
                            <div>{blog.title}</div>
                            <div>{blog.description}</div>
                            <div>{blog.tags}</div>
                        </>
                    ))
                }
            </div>
        </section>
    </>
  );
}
