import { Card, CardContent } from "@/components/ui/card";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex min-h-screen justify-center items-center">
      <Card className=" min-w-[350px] px-4 py-8">
        <CardContent>{children}</CardContent>
      </Card>
    </main>
  );
}
