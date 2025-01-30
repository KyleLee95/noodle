import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const exampleCards = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
];
function ProjectCard(props) {
  const { id } = props.project;
  return (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <Button className="mx-2" variant="destructive">
          Delete
        </Button>
        <Button className="mx-2" asChild>
          <Link to={`/projects/${id}`}>
            Open
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

export default function HomePage() {
  return (
    <>
      {exampleCards.map((ex) => <ProjectCard key={ex.id} project={ex} />)}
    </>
  );
}
