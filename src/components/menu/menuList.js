export default {
  data() {
    return {
      menuList: [
        {
          path: "/",
          title: "home"
        },
        {
          title: "Element",
          children: [
            {
              path: "/test",
              title: "test"
            },
            {
              path: "/test2",
              title: "test2"
            }
          ]
        }
      ]
    };
  }
};
