import React, { Component } from 'react';
import { AppProvider, Page, Card, Button, Tooltip, Layout, ResourceListExample, ResourceList, TextStyle, FilterType, Pagination, Stack } from '@shopify/polaris';
import '@shopify/polaris/styles.css';
import './App.css';

class App extends Component {
  state = {
    searchValue: '',
    appliedFilters: [],
    selectedItems: [],
  };

  handleSelectionChange = (selectedItems) => {
    this.setState({selectedItems});
  };

  handleSearchChange = (searchValue) => {
    this.setState({searchValue});
  };

  handleFiltersChange = (appliedFilters) => {
    this.setState({appliedFilters});
  };

  renderItem = (item) => {
    const {id, url, name, state, openOrderURL} = item;
    const shortcutActions = openOrderURL
        ?[{content: 'Open', url: openOrderURL}]
        : null;

    return (
      <ResourceList.Item
        id={id}
        url={url}
        shortcutActions={shortcutActions}>
        <h3>
          <TextStyle variation="strong">{name}</TextStyle>
        </h3>
        <div>{state}</div>
      </ResourceList.Item>
    );
  };

  render() {
    const resourceName = {
      singular: 'return',
      plural: 'returns',
    };

    const items = [
      {
        id: 341,
        url: 'returns/341347',
        name: '341347',
        state: 'Received',
        openOrderURL: 'returns/341347',
      },
      {
        id: 256,
        url: 'returns/256892',
        name: '256892',
        state: 'Approved',
        openOrderURL: 'returns/256892'
      },
    ];

    const filters = [
      {
        key: 'orderNumberFilter',
        label: 'Order Number',
        operatorText: 'is',
        type: FilterType.TextField,
      },
      {
        key: 'returnStatusFilter',
        label: 'Return status',
        operatorText: 'is',
        type: FilterType.Select,
        options: ['Approved', 'Received', 'Controlled', 'Processed', 'Deleted', 'Rejected', 'Archived'],
      },
    ];

    const filterControl = (
      <ResourceList.FilterControl
        filters={filters}
        appliedFilters={this.state.appliedFilters}
        onFiltersChange={this.handleFiltersChange}
        searchValue={this.state.searchValue}
        onSearchChange={this.handleSearchChange}
        additionalAction={{
          content: 'Save',
          onAction: () => console.log('New filter saved'),
        }}
      />
    );

    const promotedBulkActions = [
      {
        content: 'Edit returns',
        onAction: () => console.log('Todo: implement bulk edit'),
      },
    ];

    const bulkActions = [
      {
        content: 'Add tags',
        onAction: () => console.log('Todo: implement bulk add tags'),
      },
      {
        content: 'Remove tags',
        onAction: () => console.log('Todo: implement bulk remove tags'),
      },
      {
        content: 'Delete returns',
        onAction: () => console.log('Todo: implement bulk delete'),
      },
    ];

    return (
      <AppProvider>
        <Page title="Returns">
        <Card>
          <ResourceList
            resourceName={resourceName}
            items={items}
            renderItem={this.renderItem}
            filterControl={filterControl}
            selectedItems={this.state.selectedItems}
            onSelectionChange={this.handleSelectionChange}
            promotedBulkActions={promotedBulkActions}
            bulkActions={bulkActions}
          />
          <Stack distribution='center'>
          <Pagination>
            hasPrevious
              onPrevious={() => {
                console.log('Previous');
              }}
            hasNext
              onNext={() => {
                console.log('Next');
              }}
          </Pagination>
          </Stack>
        </Card>
        </Page>
      </AppProvider>
    );
  }
}

export default App;