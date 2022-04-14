use anyhow::Result;
use clap::{App, Arg};
use std::process::Command;

fn main() -> Result<()> {
    let waddleup = App::new("waddleup")
        .version(env!("CARGO_PKG_VERSION"))
        .author(" Coco Application Group")
        .about("waddleup是waddle的官方管理工具")
        .subcommand(
            //INSTALL
            App::new("install")
                .about("安装waddleup")
                .arg(Arg::new("path").required(true).index(1)),
        )
        .subcommand(
            //UNINSTALL
            App::new("uninstall")
                .about("卸载waddleup")
                .arg(Arg::new("path").required(true).index(1)),
        )
        .subcommand(
            //UPDATE
            App::new("run")
                .about("运行waddleup")
                .arg(Arg::new("stable").required(true).index(1)),
        );

    let matches = waddleup.get_matches();
    let mut status = true;

    //WADDLEUP INSTALL
    if status {
        matches.subcommand_matches("install").map(|x| {
            status = false;
            let path = x.value_of("path").unwrap();
            let waddleup_path = format!("{}/waddleup/release/waddleup.exe", path);
            println!("下载waddle到{}", path);
            if cfg!(target_os = "windows") {
                Command::new("git")
                    .args(["clone", "https://gitee.com/coco-ag/coco-waddle.git", path])
                    .output();
                Command::new("SETX")
                    .args(["/M", "Path", &waddleup_path])
                    .output()
                    .expect("failed to execute process");
            } else {
                Command::new("git")
                    .args(["clone https://gitee.com/coco-ag/coco-waddle.git ",&path,])
                    .output()
                    .expect("failed to execute process");
            }
        });
    }
    if status {
        matches.subcommand_matches("uninstall").map(|x| {
            status = false;
            let path = x.value_of("path").unwrap();
            println!("卸载{}位置的waddle", path);
            if cfg!(target_os = "windows") {
                Command::new("powershell")
                    .args(["/C", "rm -rf", path])
                    .output()
                    .expect("failed to execute process");
            } else {
                Command::new("sh")
                    .args(["-c", "rm -rf ", path])
                    .output()
                    .expect("failed to execute process");
            }
        });
    }
    if status {
        matches.subcommand_matches("run").map(|_| {
            status = false;
            if cfg!(target_os = "windows") {
                Command::new("powershell")
                    .args(["/C", "start", "localhost:8080"])
                    .current_dir("../../")
                    .output()
                    .expect("failed to execute process");
                Command::new("powershell")
                    .args(["/C", "python", "-m", "http.server", "8080"])
                    .current_dir("../../")
                    .output()
                    .expect("failed to execute process");
            } else {
                Command::new("sh")
                    .args(["-c", "python -m http.server 8080"])
                    .current_dir("../../")
                    .output()
                    .expect("failed to execute process");
            }
        });
    }
    Ok(())
}
