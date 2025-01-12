import ChatForum from "@/app/components/ChatForum";
import { currentUser } from '@clerk/nextjs/server'

interface Params {
    slug: string;
}

export default async function Page({ params }: { params: Params }) {
    const user = await currentUser();
    const slug = (await params).slug;
    return <ChatForum slug={slug} clerkUser={{id: user?.id, name: user?.firstName, token: user?.publicMetadata.token}} />;
}