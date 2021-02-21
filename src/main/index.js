'use strict'

/* 主进程入口文件
Main process entry file */

/* 保存此文件时electron将会重启
Electron will restart when saving this file */

/* AppManager负责管理整个app
AppManager is responsible for managing the entire app */
import AppManager from './managers/app'
import { protocol } from 'electron'

// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([
  { scheme: 'app', privileges: { secure: true, standard: true } }
])

const app = new AppManager()

/* 可通过electron remote从渲染进程（vue）获取到appManager
You can access appManager with electron remote from renderer process (vue) */
global.appManager = app

export default app
