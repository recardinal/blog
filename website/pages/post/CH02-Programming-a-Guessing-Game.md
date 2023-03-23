[https://doc.rust-lang.org/book/ch02-00-guessing-game-tutorial.html](https://doc.rust-lang.org/book/ch02-00-guessing-game-tutorial.html)
写一个猜谜游戏，生成一个 0-100 的随机数，提示玩家输入一个猜测数。
## 初始化项目
运行命令行：
```shell
$ cargo new guessing_game
$ cd guessing_game
```
## 处理输入的数
猜谜游戏的第一步是要求玩家输入一个数
文件 _src/main.rs_：
```rust
// 为了读取用户输入以及输出结果，需要 io (input/output) 库
// io 在 standard 库中，被称为 std
// 默认 rust 只会加载少量类型到作用域
use std::io;

fn main() {
    // `println!`是一个`macro`
    println!("Guess the number!");
    
    println!("Please input your guess.");

    // `guess`用来存储用户的输入
    // 在rust中，变量默认是不可变的（immutable）
    // `mut` -> mutable 使变量可变
    // `String:new`返回一个`String`实例
    // `std`提供的可增长的，utf8编码的 string 类型
    // `::`表示`new`是`String`的一个关联函数
    // 关联函数在类型上实现，在这里时`String`类型，而不是一个特定实例
    // 有些语言称这个为静态方法
    let mut guess = String::new();

    // 如果移除`use std::io`，可以写成`std::io::stdin`
    // `stdin`函数返回了一个`std::io::Stdin`的实例
    // `read_line` https://doc.rust-lang.org/std/io/struct.Stdin.html#method.read_line
    // `&`表明参数是一个`reference`，访问数据而无需复制数据到内存中
    // `reference`也是默认 immutable，需要`mut`
    io::stdin()
        .read_line(&mut guess)
        .expect("Failed to read line");

    println!("You guessed: {}", guess);
}
```
### 用 Result 类型处理潜在失败
```rust
io::stdin().read_line(&mut guess).expect("Failed to read line");
```
`read_line`将用户的输入放到 string 中，同时也返回一个值，在这个例子是[`io::Result`](https://doc.rust-lang.org/std/io/type.Result.html)。
rust 标准库中有许多叫`Result`的类型：通用的[`Result`](https://doc.rust-lang.org/std/result/enum.Result.html)以及子模块的具体版本，如`io::Result`
`Result`是[enumerations](https://doc.rust-lang.org/book/ch06-00-enums.html)，一般称为`enums`。
对于`Result`，值是`Ok`或者`Err`。`Ok`代表操作成功，包含在`Ok(...)`中的就是成功生成的值，`Err`相反，会包含失败的方式和原因。
`Result`类型的目的是编码错误处理信息。`io::Result`的实例有一个[`expect`](https://doc.rust-lang.org/std/result/enum.Result.html#method.expect)方法，如果实例是一个`Err`值，`expect`会促使程序崩溃并显示传递给它的参数；如果是一个`Ok`，`expect`会取到`Ok`包含的值并返回。在这个例子中，这个值是用户输入到标准输入中的字节数。
如果没有调用`expect`，程序会变异但是会抛出一个警告：
```shell
$ cargo build
   Compiling guessing_game v0.1.0 (file:///projects/guessing_game)
warning: unused `std::result::Result` that must be used
  --> src/main.rs:10:5
   |
10 |     io::stdin().read_line(&mut guess);
   |     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   |
   = note: `#[warn(unused_must_use)]` on by default
   = note: this `Result` may be an `Err` variant, which should be handled

warning: 1 warning emitted

    Finished dev [unoptimized + debuginfo] target(s) in 0.59s
```
rust 会警告未使用`read_line`返回的`Result`，表明没有处理可能的错误。
### 使用 println! 占位符打印值
```rust
// {} 是一个占位，也可以打印多个值 println!("x = {} and y = {}", x, y);
println!("You guessed: {}", guess);
```
### 测试第一部分
```shell
$ cargo run
   Compiling guessing_game v0.1.0 (file:///projects/guessing_game)
    Finished dev [unoptimized + debuginfo] target(s) in 6.44s
     Running `target/debug/guessing_game`
Guess the number!
Please input your guess.
6
You guessed: 6
```
## 生成一个随机数作为猜谜
接下来需要生成一个随机数，rust team 提供了一个[`rand`](https://crates.io/crates/rand) crate。
### 使用 crate 获得更多功能
[https://crates.io/](https://crates.io/)
在 _Cargo.toml_ 中添加：
```toml
[dependencies]
rand = "0.8.3"
```
重新构建：
```shell
$ cargo build
   Compiling cfg-if v1.0.0
   Compiling ppv-lite86 v0.2.10
   Compiling libc v0.2.94
   Compiling getrandom v0.1.16
   Compiling rand_core v0.5.1
   Compiling rand_chacha v0.2.2
   Compiling rand v0.8.3
   Compiling guessing_game v0.1.0 (/Users/recardinal/Desktop/rust/projects/guessing_game)
    Finished dev [unoptimized + debuginfo] target(s) in 3.35s
```
### Cargo.lock实现可复用的构建
当第一次构建项目时，Cargo 会找出相符的依赖项版本写入 _Cargo.lock_。再次构建时，Cargo 会使用 _Cargo.lock_ 中指定的版本而不是再次寻找版本，直到升级依赖版本。
### 升级 crate 版本
```shell
$ cargo update
```
如果想要指定的版本，修改 _Cargo.toml_：
```toml
[dependencies]
rand = "0.9.0"
```
### 生成随机数
现在已经将 `rand` 添加到了 _Cargo.toml_ , 下一步是编写 _src/main.rs_:
```rust
use std::io;
use rand::Rng;

fn main() {
    println!("Guess the number!");

    let secret_number = rand::thread_rng().gen_range(1..101);

    println!("The secret number is: {}", secret_number);

    println!("Please input your guess.");

    let mut guess = String::new();

    io::stdin()
        .read_line(&mut guess)
        .expect("Failed to read line");

    println!("You guessed: {}", guess);
}
```