import logo from "./logo.svg";
import {
  Container,
  Header,
  Statistic,
  Segment,
  Grid,
  Icon,
  Form,
  Button
} from "semantic-ui-react";
import "./App.css";

function App() {
  return (
    <Container>
      <Header as="h1">Header</Header>

      <Statistic size="small">
        <Statistic.Label>Your Balance:</Statistic.Label>
        <Statistic.Value>25555.00</Statistic.Value>
      </Statistic>

      <Segment textAlign="center">
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <Statistic size="tiny" color="green">
                <Statistic.Label>Income:</Statistic.Label>
                <Statistic.Value>123.00</Statistic.Value>
              </Statistic>
            </Grid.Column>
            <Grid.Column>
              <Statistic size="tiny" color="red">
                <Statistic.Label>Expenses:</Statistic.Label>
                <Statistic.Value>123</Statistic.Value>
              </Statistic>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Header as="h3">History</Header>
      <Segment color="red">
        <Grid columns={3} textAlign="right">
          <Grid.Row>
            <Grid.Column width={10} textAlign="left">
              Something
            </Grid.Column>
            <Grid.Column width={3} textAlign="right">
              $10.00
            </Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit" bordered />
              <Icon name="trash" bordered />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment color="green">
        <Grid columns={3} textAlign="right">
          <Grid.Row>
            <Grid.Column width={10} textAlign="left">
              Something else
            </Grid.Column>
            <Grid.Column width={3} textAlign="right">
              $10.00
            </Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit" bordered />
              <Icon name="trash" bordered />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment color="red">
        <Grid columns={3} textAlign="right">
          <Grid.Row>
            <Grid.Column width={10} textAlign="left">
              Something
            </Grid.Column>
            <Grid.Column width={3} textAlign="right">
              $20.00
            </Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit" bordered />
              <Icon name="trash" bordered />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Header as="h3">Add new transaction</Header>
      <Form unstackable>
        <Form.Group>
          <Form.Input
            icon="tags"
            width={12}
            label="Description"
            placeholder="New shinny thing"
          />
          <Form.Input
            icon="dollar"
            width={4}
            label="Value"
            placeholder="100.00"
            iconPosition="left"
          />
        </Form.Group>
        <Button.Group style={{marginTop: 20}}>
          <Button>Cancel</Button>
          <Button.Or/>
          <Button primary>Ok</Button>
        </Button.Group>
      </Form>
    </Container>
  );
}

export default App;
