import Card from "../shared/Card";

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About this project</h1>
        <p>This is a react app to leave feedback for a product or a service</p>
        <p>Version:1.0</p>
        <a href="/">Back to home</a>
      </div>
    </Card>
  );
}

export default AboutPage;
