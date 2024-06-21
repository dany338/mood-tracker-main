import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from '@/auth.config';
import ClientDashboard from './ui/ClientDashboard';


export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/api/auth/signin");
  }

  return <ClientDashboard session={session} />;
}
