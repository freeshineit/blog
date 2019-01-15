## pm2

### 安装

>   npm i pm2 -g

### 配置

+   json方式 `deploy.json`

    ```json
    {
        "apps": [
            {
                "name": "express_react",
                "script": "./app.js",
                "watch": true,
                "env": {
                    "NODE_ENV": "development"
                }
            },
            {    
                "name": "express_react_socket",
                "script": "./app.socket.js",
                "watch": true,
                "env": {
                    "NODE_ENV": "development"
                }
            }
        ]
    }
    ```

+   [yaml](https://yaml.org/)方式 `deploy.yml`

    ```yml
    # deploy.yaml
    apps:
      - script: ./app.js       # 入口文件
        name: 'app'              # 程序名称
        watch: true
        env:                     # 环境变量
          COMMON_VARIABLE: true
        env_production:
          NODE_ENV: production
      - script: ./app.socket.js       # 入口文件
        name: 'app_socket'              # 程序名称
        watch: true
        env:                     # 环境变量
          COMMON_VARIABLE: true
        env_production:
          NODE_ENV: production
    ```

## 配置说明

```json
{
    "apps": {
        "name": "wuwu",                             // 项目名          
        "script": "./bin/www",                      // 执行文件
        "cwd": "./",                                // 根目录
        "args": "",                                 // 传递给脚本的参数
        "interpreter": "",                          // 指定的脚本解释器
        "interpreter_args": "",                     // 传递给解释器的参数
        "watch": true,                              // 是否监听文件变动然后重启
        "ignore_watch": [                           // 不用监听的文件
            "node_modules",
            "logs"
        ],
        "exec_mode": "cluster_mode",                // 应用启动模式，支持fork和cluster模式
        "instances": 4,                             // 应用启动实例个数，仅在cluster模式有效 默认为fork；或者 max
        "max_memory_restart": 8,                    // 最大内存限制数，超出自动重启
        "error_file": "./logs/app-err.log",         // 错误日志文件
        "out_file": "./logs/app-out.log",           // 正常日志文件
        "merge_logs": true,                         // 设置追加日志而不是新建日志
        "log_date_format": "YYYY-MM-DD HH:mm:ss",   // 指定日志文件的时间格式
        "min_uptime": "60s",                        // 应用运行少于时间被认为是异常启动
        "max_restarts": 30,                         // 最大异常重启次数，即小于min_uptime运行时间重启次数；
        "autorestart": true,                        // 默认为true, 发生异常的情况下自动重启
        "cron_restart": "",                         // crontab时间格式重启应用，目前只支持cluster模式;
        "restart_delay": "60s",                      // 异常重启情况下，延时重启时间
        "env": {
            "NODE_ENV": "production",                // 环境参数，当前指定为生产环境 process.env.NODE_ENV
            "REMOTE_ADDR": ""               // process.env.REMOTE_ADDR
        },
        "env_dev": {
            "NODE_ENV": "development",              // 环境参数，当前指定为开发环境 pm2 start app.js --env_dev
            "REMOTE_ADDR": ""
        },
        "env_test": {                               // 环境参数，当前指定为测试环境 pm2 start app.js --env_test
            "NODE_ENV": "test",
            "REMOTE_ADDR": ""
        }
    }
}
```


上面说明出自[作者：武武  pm2配置文件介绍](https://juejin.im/post/5b173fa8f265da6e484cf163), 对其内容略有修改
    

