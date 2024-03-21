import React from "react";
import Toast from "./Toast/Toast";
import {
  successMsgs,
  failureMsgs,
  warningMsgs,
  randomMsg,
  informationMsgs
} from "../toastMessages";

export default {
  title: "Components/Toast",
  component: Toast,
  argTypes: {
    type: { 
      control: { 
        type: "select", 
        options: ["default", "notification"] 
      },
      order: 1, 
    },
    showIcon: { 
      control: "boolean",
      order: 2, 
    },
    iconSwap: { 
      control: { 
        type: "select", 
        options: ["success", "failure", "warning", "information"] 
      },
      order: 3, 
    },
    showDivider: { 
      control: "boolean",
      order: 4, 
    },
    showButton: { 
      control: "boolean",
      order: 5, 
    },
    showCloseIcon: { 
      control: "boolean",
      order: 6,
    },
    editText: { 
      control: "text",
      order: 7, 
    },
  },
};

const Template = (args) => <Toast {...args} />;

export const SuccessToast = Template.bind({});
SuccessToast.args = {
  type: "notification",
  showIcon: true,
  iconSwap: "success",
  showDivider: true,
  showButton: true,
  showCloseIcon: true,
  editText: randomMsg(successMsgs),
};

export const FailureToast = Template.bind({});
FailureToast.args = {
  type: "notification",
  showIcon: true,
  iconSwap: "failure",
  showDivider: true,
  showButton: true,
  showCloseIcon: true,
  editText: randomMsg(failureMsgs),
};

export const WarningToast = Template.bind({});
WarningToast.args = {
  type: "notification",
  showIcon: true,
  iconSwap: "warning",
  showDivider: true,
  showButton: true,
  showCloseIcon: true,
  editText: randomMsg(warningMsgs),
};

export const InformationToast = Template.bind({});
InformationToast.args = {
  type: "notification",
  showIcon: true,
  iconSwap: "information",
  showDivider: true,
  showButton: true,
  showCloseIcon: true,
  editText: randomMsg(informationMsgs),
};
