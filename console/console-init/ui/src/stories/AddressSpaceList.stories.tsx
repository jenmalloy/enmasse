/*
 * Copyright 2020, EnMasse authors.
 * License: Apache License 2.0 (see the file LICENSE or http://apache.org/licenses/LICENSE-2.0.html).
 */

import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import {
  IAddressSpace,
  AddressSpaceList
} from "components/AddressSpaceList/AddressSpaceList";
import { MemoryRouter } from "react-router";
import { action } from "@storybook/addon-actions";

const stories = storiesOf("Address Space List", module);
stories.addDecorator(withKnobs);

const rows: IAddressSpace[] = [
  {
    name: "jupiter_as1",
    nameSpace: "app1_ns",
    creationTimestamp: "2019-11-10T05:08:31.489Z",
    type: "standard",
    displayName: "Small",
    planValue: "standard-small",
    isReady: false,
    phase: "Configuring",
    messages: [],
    authenticationService: "none-authservice"
  },
  {
    name: "saturn-as2",
    nameSpace: "app1_ns",
    creationTimestamp: "2019-11-10T05:10:41.297Z",
    type: "brokered",
    displayName: "Small",
    planValue: "brokered-small",
    isReady: true,
    phase: "Active",
    messages: [],
    authenticationService: "standard-authservice"
  },
  {
    name: "mars_as2",
    nameSpace: "app2_ns",
    creationTimestamp: "2019-11-10T18:37:56.975Z",
    type: "standard",
    displayName: "Large",
    planValue: "standard-large",
    isReady: false,
    phase: "Failed",
    messages: [],
    authenticationService: "standard-authservice"
  },
  {
    name: "earth_as3",
    nameSpace: "myapp_ns",
    creationTimestamp: "2019-11-10T15:08:32.489Z",
    type: "brokered",
    displayName: "Medium",
    planValue: "brokered-medium",
    isReady: false,
    phase: "Configuring",
    messages: [],
    authenticationService: "standard-authservice"
  }
];

stories.add("Address Space List", () => (
  <MemoryRouter>
    <AddressSpaceList
      onSelectAddressSpace={action("select addressSpace")}
      onSelectAllAddressSpace={action("SelectAllAddressSpaces")}
      rows={rows}
      onEdit={action("onEdit")}
      onDelete={action("onDelete")}
      onDownload={action("download Certificate")}
    />
  </MemoryRouter>
));
