const router = [
  {
    title: "控制台",
    icon: "home",
    key: "/home",
  },
  {
    title: "用户管理",
    icon: "laptop",
    key: "/home/user",
    child: [
      {
        key: "/home/user/list",
        title: "用户列表",
        icon: "",
      },
      {
        key: "/home/user/add",
        title: "添加用户",
        icon: "",
      },
    ],
  },
  {
    title: "部门管理",
    icon: "bars",
    key: "/home/navigation",
    child: [
      {
        key: "/home/navigation/dropdown",
        title: "部门列表",
        icon: "",
      },
      {
        key: "/home/navigation/menu",
        title: "添加部门",
        icon: "",
        child: [
          {
            key: "/home/navigation/dropdown",
            title: "部门列表",
            icon: "",
          },
          {
            key: "/home/navigation/menu",
            title: "添加部门",
            icon: "",
          },
        ],
      },
    ],
  },
  {
    title: "职位管理",
    icon: "edit",
    key: "/home/entry",
    child: [
      {
        key: "/home/entry/form/basic-form",
        title: "职位列表",
        icon: "",
      },
      {
        key: "/home/entry/form/step-form",
        title: "添加职位",
        icon: "",
      },
    ],
  },
  {
    title: "请假",
    icon: "info-circle-o",
    key: "/home/about1",
  },
  {
    title: "加班",
    icon: "info-circle-o",
    key: "/home/about",
  },
];

export default router;
