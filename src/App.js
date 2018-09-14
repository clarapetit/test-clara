import React, { Component } from 'react';
import {AppProvider, Page, Card, Button, Tooltip, Layout} from '@shopify/polaris';
import '@shopify/polaris/styles.css';
import './App.css';

class App extends Component {

  state={loading:false}

  onClick() {
    this.setState({
      loading:true
    })

    setTimeout(() => {
      this.setState({
        loading:false
      })
    }, 2000)
  }

  render() {
    return (
      <AppProvider>
    <Page title="Example app">
      <Layout>
        <Layout.Section>
          <Card title='Order details' sectioned>
            <p>View a summary of your order.</p>
            <br />
            <Button onClick={() => this.onClick()} loading={this.state.loading}>View Summary</Button>
          </Card>
        </Layout.Section>
          <Layout.Section secondary>
            <Card title='Tags' sectioned>
              <p>Add tags to your order.</p>
            </Card>
          </Layout.Section>
        </Layout>
    </Page>
  </AppProvider>
    );
  }
}

export default App;
