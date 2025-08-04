@echo off
echo ========================================
echo    OHMNANON CP应援站 - Docker版本
echo ========================================
echo.

echo 正在检查Docker...
docker --version >nul 2>&1
if errorlevel 1 (
    echo 错误: 未找到Docker，请先安装Docker Desktop
    echo 下载地址: https://www.docker.com/products/docker-desktop/
    pause
    exit /b 1
)

echo Docker已安装
echo.

echo 正在创建数据目录...
if not exist "data" mkdir data
if not exist "uploads" mkdir uploads

echo 数据目录创建完成
echo.

echo 正在构建Docker镜像...
docker-compose build
if errorlevel 1 (
    echo 错误: Docker镜像构建失败
    pause
    exit /b 1
)

echo Docker镜像构建完成
echo.

echo 正在启动容器...
docker-compose up -d
if errorlevel 1 (
    echo 错误: 容器启动失败
    pause
    exit /b 1
)

echo.
echo ========================================
echo    启动成功！
echo ========================================
echo 网站地址: http://localhost:3000
echo 数据库文件: ./data/ohmnanon.db
echo 上传文件: ./uploads/
echo.
echo 管理命令:
echo   查看日志: docker-compose logs -f
echo   停止服务: docker-compose down
echo   重启服务: docker-compose restart
echo.
echo 按任意键退出...
pause >nul 