[https://doc.rust-lang.org/book/ch01-00-getting-started.html](https://doc.rust-lang.org/book/ch01-00-getting-started.html)

## 1.1 安装
### 在 macOs 安装
```shell
$ curl --proto '=https' --tlsv1.2 https://sh.rustup.rs -sSf | sh
```
### 更新、卸载、 版本
更新：
```shell
$ rustup update
```
卸载：
```shell
$ rustup self uninstall
```
版本查看：
```shell
$ rustc --version
```
### 本地文档
```shell
$ rustup doc
```
## 1.2 经典 Hello, World!
### 创建一个项目文件夹
```shell
$ mkdir ~/projects
$ cd ~/projects
$ mkdir hello_world
$ cd hello_world
```
### 编写和运行一个 rust 程序
rust 文件使用 .rs 后缀，如果使用多个词，推荐使用下划线分割，如 hello_world。
创建一个 main.rs 文件：
```rust
fn main() {
    println!("Hello, world!");
}
```
编译和运行：
```shell
$ rustc main.rs
$ ./main
```
会输出Hello, World！
### 剖析
上面的代码定义了一个 rust 函数， `main`函数是特殊的：它总是第一个运行的。
可以使用自动格式化工具`rustfmt`来格式化代码，安装 rust 时候已经一并安装了。
rust 的缩进是使用4个空格，而不是tab。
`println!` 调用了一个 rust macro。调用函数则是`println`，没有`!`（会在19章介绍`!`，所以是什么呢）。
## 1.3 Hello, Cargo!
Cargo 是 Rust 的构建系统和包管理器
### 用 Cargo 创建一个项目
运行命令行：
```
$ cargo new hello_cargo
$ cd hello_cargo
```
默认会初始化git，使用`--vcs=none`flag去除版本控制，或者使用别的版本控制工具。
文件 _Cargo.toml_ ：
```toml
[package]
name = "hello_cargo"
version = "0.1.0"
authors = ["Your Name <you@example.com>"]
edition = "2018"

[dependencies]
```
文件 _src/main.rs_：
```rust
fn main() {
    println!("Hello, world!");
}
```
### 构建和运行一个 Cargo 项目
运行命令行：
``` shell
$ cargo build
   Compiling hello_cargo v0.1.0 (file:///projects/hello_cargo)
    Finished dev [unoptimized + debuginfo] target(s) in 2.85 secs
```
这条命令在 _target/debug/hello_cargo_ 创建了一个可运行文件。
运行这个文件：
```shell
$ ./target/debug/hello_cargo # or .\target\debug\hello_cargo.exe on Windows
Hello, world!
```
第一次运行`cargo build`也会在顶层创建一个 _Cargo.lock_ 的文件（类似`yarn.lock`？记录依赖的版本）。
使用`cargo run`可以直接编译完成后运行：
```shell
$ cargo run
    Finished dev [unoptimized + debuginfo] target(s) in 0.0 secs
     Running `target/debug/hello_cargo`
Hello, world!
```
因为未作修改，Cargo 会直接运行编译文件。
Cargo 还有个命令叫`cargo check`，会检查代码确保编译了，但是不会生成可执行文件：
```shell
$ cargo check
   Checking hello_cargo v0.1.0 (file:///projects/hello_cargo)
    Finished dev [unoptimized + debuginfo] target(s) in 0.32 secs
```
通常，`cargo check`比`cargo build`快得多，编写程序时使用`cargo check`确保编译，准备运行时再使用`cargo build`。
### 构建发布
使用`cargo build --release`编译优化。会在 _target/release_ 而不是 _target/debug_ 创建可执行文件。这个优化会加快 Rust 代码的运行速度，相对打包时间会变长。
