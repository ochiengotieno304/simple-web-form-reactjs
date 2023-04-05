import { TextInput, Label, Button, Textarea, Select } from "flowbite-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [issue, setIssue] = useState("Query");
  const [comment, setComment] = useState("");

  const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleIssue = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setIssue(event.target.value);
  };

  const handleComment = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event: { preventDefault: () => void }): void => {
    event.preventDefault();
  };

  return (
    <>
      <h1 className="text-4xl mb-10 text-center text-blue-900">Simple Form</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="name" value="Your name" />
          </div>
          <TextInput
            id="name"
            type="text"
            value={name}
            placeholder="John Doe"
            required={true}
            onChange={handleName}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your email" />
          </div>
          <TextInput
            id="email1"
            type="email"
            placeholder="example@email.com"
            required={true}
            value={email}
            onChange={handleEmail}
          />
        </div>
        <div id="select">
          <div className="mb-2 block">
            <Label htmlFor="countries" value="Select your country" />
          </div>
          <Select
            id="countries"
            required={true}
            value={issue}
            onChange={handleIssue}
          >
            <option>Query</option>
            <option>Feedback</option>
            <option>Complaint</option>
            <option>Other</option>
          </Select>
        </div>
        <div id="textarea">
          <div className="mb-2 block">
            <Label htmlFor="comment" value="Your message" />
          </div>
          <Textarea
            id="comment"
            placeholder="Leave a comment..."
            required={true}
            value={comment}
            rows={4}
            onChange={handleComment}
          />
        </div>
        <Button type="submit">Submit</Button>
        <Link to="/details" state={{ some: "value", hello: "world" }}>
          Details
        </Link>
      </form>
    </>
  );
};

export default Form;
