@echo off
echo ========================================
echo    OHMNANON CP应援站 - Docker管理
echo ========================================
echo.
echo 请选择操作:
echo 1. 启动服务
echo 2. 停止服务
echo 3. 重启服务
echo 4. 查看日志
echo 5. 查看状态
echo 6. 清理容器和镜像
echo 7. 备份数据库
echo 8. 退出
echo.
set /p choice=请输入选择 (1-8): 

if "%choice%"=="1" goto start
if "%choice%"=="2" goto stop
if "%choice%"=="3" goto restart
if "%choice%"=="4" goto logs
if "%choice%"=="5" goto status
if "%choice%"=="6" goto clean
if "%choice%"=="7" goto backup
if "%choice%"=="8" goto exit
goto invalid

:start
echo 正在启动服务...
docker-compose up -d
echo 服务已启动，访问 http://localhost:3000
goto end

:stop
echo 正在停止服务...
docker-compose down
echo 服务已停止
goto end

:restart
echo 正在重启服务...
docker-compose restart
echo 服务已重启
goto end

:logs
echo 正在显示日志 (按 Ctrl+C 退出)...
docker-compose logs -f
goto end

:status
echo 正在查看服务状态...
docker-compose ps
echo.
echo 容器资源使用情况:
docker stats --no-stream
goto end

:clean
echo 正在清理容器和镜像...
docker-compose down
docker system prune -f
echo 清理完成
goto end

:backup
echo 正在备份数据库...
if exist "data\ohmnanon.db" (
    copy "data\ohmnanon.db" "data\ohmnanon_backup_%date:~0,4%%date:~5,2%%date:~8,2%_%time:~0,2%%time:~3,2%%time:~6,2%.db"
    echo 数据库备份完成
) else (
    echo 数据库文件不存在
)
goto end

:invalid
echo 无效选择，请重新输入
goto end

:exit
echo 退出管理工具
exit /b 0

:end
echo.
pause 