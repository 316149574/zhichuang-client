const env = import.meta.env.MODE || "prod";
const EnvConfig = {
  dev: {
    baseApi: "119.3.202.71:3000",
    mockApi: "https://www.fastmock.site/mock/ea387bf6b0a1f5a493bc2af328a2d028",
  },
  test: {
    baseApi: "119.3.202.71:3000",
    mockApi: "https://www.fastmock.site/mock/ea387bf6b0a1f5a493bc2af328a2d028",
  },
  prod: {
    baseApi: "119.3.202.71:3000",
    mockApi: "https://www.fastmock.site/mock/ea387bf6b0a1f5a493bc2af328a2d028",
  },
};
export default {
  env,
  spacename: "ZHICHUANG",
  mock: false,
  ...EnvConfig[env],
};
