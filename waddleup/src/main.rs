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
                .arg(Arg::new("stable").required(true).index(1)),
        )
        .subcommand(
            //UNINSTALL
            App::new("uninstall")
                .about("卸载waddleup")
                .arg(Arg::new("stable").required(true).index(1)),
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
        matches.subcommand_matches("install").map(|_| {
            status = false;
            let _output = if cfg!(target_os = "windows") {
                Command::new("powershell")
                    .args(["git clone https://gitee.com/coco-ag/coco-waddle.git"])
                    .output()
                    .expect("failed to execute process")
            } else {
                Command::new("sh")
                    .args(["git clone https://gitee.com/coco-ag/coco-waddle.git"])
                    .output()
                    .expect("failed to execute process")
            };
        });
    }
    if status {
        matches.subcommand_matches("uninstall").map(|_| {
            status = false;
            let _output = if cfg!(target_os = "windows") {
                Command::new("powershell")
                    .args(["rm -rf coco-waddle"])
                    .output()
                    .expect("failed to execute process")
            } else {
                Command::new("sh")
                    .args(["rm -rf coco-waddle"])
                    .output()
                    .expect("failed to execute process")
            };
        });
    }
    if status {
        matches.subcommand_matches("run").map(|_| {
            status = false;
            let _output = if cfg!(target_os = "windows") {
                Command::new("powershell")
                    .args(["start http://localhost:8000/"])
                    .args(["cd coco-waddle"])
                    .args(["python -m http.server 8000"])
                    .output()
                    .expect("failed to execute process")
            } else {
                Command::new("sh")
                    .args(["cd coco-waddle"])
                    .args(["python -m http.server 8000"])
                    .output()
                    .expect("failed to execute process")
            };
        });
    }
    Ok(())
}
