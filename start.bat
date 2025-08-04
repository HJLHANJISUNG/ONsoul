@echo off
echo ========================================
echo    OHMNANON CP应援站启动脚本
echo ========================================
echo.

echo 正在检查Node.js...
node --version >nul 2>&1
if errorlevel 1 (
    echo 错误: 未找到Node.js，请先安装Node.js
    echo 下载地址: https://nodejs.org/
    pause
    exit /b 1
)

echo Node.js已安装
echo.

echo 正在安装依赖包...
npm install
if errorlevel 1 (
    echo 错误: 依赖包安装失败
    pause
    exit /b 1
)

echo 依赖包安装完成
echo.

echo 正在启动服务器...
echo 网站将在 http://localhost:3000 打开
echo 按 Ctrl+C 停止服务器
echo.

npm start

pause 