import { Button } from "@thirdbracket/core";
import { Card } from "@thirdbracket/bracketui";

export default function Page() {
  return (
    <>
      <h1>Web</h1>
      <Card>
        <Button>Boop</Button>
      </Card>
      <Card className="bg-blue-500">
        <h1>My Card</h1>
      </Card>
    </>
  );
}
