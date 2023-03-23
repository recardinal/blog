(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[617],{8162:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/post/CH02-Programming-a-Guessing-Game",function(){return c(5993)}])},5993:function(c,b,a){"use strict";a.r(b),a.d(b,{"__N_SSG":function(){return f},headings:function(){return g}});var d=a(5893),e=a(1151),f=!0,g=[{title:"\u521D\u59CB\u5316\u9879\u76EE",depth:"2"},{title:"\u5904\u7406\u8F93\u5165\u7684\u6570",depth:"2"},{title:"\u7528 Result \u7C7B\u578B\u5904\u7406\u6F5C\u5728\u5931\u8D25",depth:"3"},{title:"\u4F7F\u7528 println! \u5360\u4F4D\u7B26\u6253\u5370\u503C",depth:"3"},{title:"\u6D4B\u8BD5\u7B2C\u4E00\u90E8\u5206",depth:"3"},{title:"\u751F\u6210\u4E00\u4E2A\u968F\u673A\u6570\u4F5C\u4E3A\u731C\u8C1C",depth:"2"},{title:"\u4F7F\u7528 crate \u83B7\u5F97\u66F4\u591A\u529F\u80FD",depth:"3"},{title:"Cargo.lock\u5B9E\u73B0\u53EF\u590D\u7528\u7684\u6784\u5EFA",depth:"3"},{title:"\u5347\u7EA7 crate \u7248\u672C",depth:"3"},{title:"\u751F\u6210\u968F\u673A\u6570",depth:"3"}];function h(b){var a=Object.assign({p:"p",a:"a",h2:"h2",pre:"pre",code:"code",em:"em",h3:"h3"},(0,e.ah)(),b.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(a.p,{children:[(0,d.jsx)(a.a,{href:"https://doc.rust-lang.org/book/ch02-00-guessing-game-tutorial.html",children:"https://doc.rust-lang.org/book/ch02-00-guessing-game-tutorial.html"}),"\r\n\u5199\u4E00\u4E2A\u731C\u8C1C\u6E38\u620F\uFF0C\u751F\u6210\u4E00\u4E2A 0-100 \u7684\u968F\u673A\u6570\uFF0C\u63D0\u793A\u73A9\u5BB6\u8F93\u5165\u4E00\u4E2A\u731C\u6D4B\u6570\u3002"]}),"\n",(0,d.jsx)(a.h2,{children:"\u521D\u59CB\u5316\u9879\u76EE"}),"\n",(0,d.jsx)(a.p,{children:"\u8FD0\u884C\u547D\u4EE4\u884C\uFF1A"}),"\n",(0,d.jsx)(a.pre,{children:(0,d.jsx)(a.code,{className:"language-shell",children:"$ cargo new guessing_game\r\n$ cd guessing_game\n"})}),"\n",(0,d.jsx)(a.h2,{children:"\u5904\u7406\u8F93\u5165\u7684\u6570"}),"\n",(0,d.jsxs)(a.p,{children:["\u731C\u8C1C\u6E38\u620F\u7684\u7B2C\u4E00\u6B65\u662F\u8981\u6C42\u73A9\u5BB6\u8F93\u5165\u4E00\u4E2A\u6570\r\n\u6587\u4EF6 ",(0,d.jsx)(a.em,{children:"src/main.rs"}),"\uFF1A"]}),"\n",(0,d.jsx)(a.pre,{children:(0,d.jsx)(a.code,{className:"language-rust",children:'// \u4E3A\u4E86\u8BFB\u53D6\u7528\u6237\u8F93\u5165\u4EE5\u53CA\u8F93\u51FA\u7ED3\u679C\uFF0C\u9700\u8981 io (input/output) \u5E93\r\n// io \u5728 standard \u5E93\u4E2D\uFF0C\u88AB\u79F0\u4E3A std\r\n// \u9ED8\u8BA4 rust \u53EA\u4F1A\u52A0\u8F7D\u5C11\u91CF\u7C7B\u578B\u5230\u4F5C\u7528\u57DF\r\nuse std::io;\r\n\r\nfn main() {\r\n    // `println!`\u662F\u4E00\u4E2A`macro`\r\n    println!("Guess the number!");\r\n    \r\n    println!("Please input your guess.");\r\n\r\n    // `guess`\u7528\u6765\u5B58\u50A8\u7528\u6237\u7684\u8F93\u5165\r\n    // \u5728rust\u4E2D\uFF0C\u53D8\u91CF\u9ED8\u8BA4\u662F\u4E0D\u53EF\u53D8\u7684\uFF08immutable\uFF09\r\n    // `mut` -> mutable \u4F7F\u53D8\u91CF\u53EF\u53D8\r\n    // `String:new`\u8FD4\u56DE\u4E00\u4E2A`String`\u5B9E\u4F8B\r\n    // `std`\u63D0\u4F9B\u7684\u53EF\u589E\u957F\u7684\uFF0Cutf8\u7F16\u7801\u7684 string \u7C7B\u578B\r\n    // `::`\u8868\u793A`new`\u662F`String`\u7684\u4E00\u4E2A\u5173\u8054\u51FD\u6570\r\n    // \u5173\u8054\u51FD\u6570\u5728\u7C7B\u578B\u4E0A\u5B9E\u73B0\uFF0C\u5728\u8FD9\u91CC\u65F6`String`\u7C7B\u578B\uFF0C\u800C\u4E0D\u662F\u4E00\u4E2A\u7279\u5B9A\u5B9E\u4F8B\r\n    // \u6709\u4E9B\u8BED\u8A00\u79F0\u8FD9\u4E2A\u4E3A\u9759\u6001\u65B9\u6CD5\r\n    let mut guess = String::new();\r\n\r\n    // \u5982\u679C\u79FB\u9664`use std::io`\uFF0C\u53EF\u4EE5\u5199\u6210`std::io::stdin`\r\n    // `stdin`\u51FD\u6570\u8FD4\u56DE\u4E86\u4E00\u4E2A`std::io::Stdin`\u7684\u5B9E\u4F8B\r\n    // `read_line` https://doc.rust-lang.org/std/io/struct.Stdin.html#method.read_line\r\n    // `&`\u8868\u660E\u53C2\u6570\u662F\u4E00\u4E2A`reference`\uFF0C\u8BBF\u95EE\u6570\u636E\u800C\u65E0\u9700\u590D\u5236\u6570\u636E\u5230\u5185\u5B58\u4E2D\r\n    // `reference`\u4E5F\u662F\u9ED8\u8BA4 immutable\uFF0C\u9700\u8981`mut`\r\n    io::stdin()\r\n        .read_line(&mut guess)\r\n        .expect("Failed to read line");\r\n\r\n    println!("You guessed: {}", guess);\r\n}\n'})}),"\n",(0,d.jsx)(a.h3,{children:"\u7528 Result \u7C7B\u578B\u5904\u7406\u6F5C\u5728\u5931\u8D25"}),"\n",(0,d.jsx)(a.pre,{children:(0,d.jsx)(a.code,{className:"language-rust",children:'io::stdin().read_line(&mut guess).expect("Failed to read line");\n'})}),"\n",(0,d.jsxs)(a.p,{children:[(0,d.jsx)(a.code,{children:"read_line"}),"\u5C06\u7528\u6237\u7684\u8F93\u5165\u653E\u5230 string \u4E2D\uFF0C\u540C\u65F6\u4E5F\u8FD4\u56DE\u4E00\u4E2A\u503C\uFF0C\u5728\u8FD9\u4E2A\u4F8B\u5B50\u662F",(0,d.jsx)(a.a,{href:"https://doc.rust-lang.org/std/io/type.Result.html",children:(0,d.jsx)(a.code,{children:"io::Result"})}),"\u3002\r\nrust \u6807\u51C6\u5E93\u4E2D\u6709\u8BB8\u591A\u53EB",(0,d.jsx)(a.code,{children:"Result"}),"\u7684\u7C7B\u578B\uFF1A\u901A\u7528\u7684",(0,d.jsx)(a.a,{href:"https://doc.rust-lang.org/std/result/enum.Result.html",children:(0,d.jsx)(a.code,{children:"Result"})}),"\u4EE5\u53CA\u5B50\u6A21\u5757\u7684\u5177\u4F53\u7248\u672C\uFF0C\u5982",(0,d.jsx)(a.code,{children:"io::Result"}),"\r\n",(0,d.jsx)(a.code,{children:"Result"}),"\u662F",(0,d.jsx)(a.a,{href:"https://doc.rust-lang.org/book/ch06-00-enums.html",children:"enumerations"}),"\uFF0C\u4E00\u822C\u79F0\u4E3A",(0,d.jsx)(a.code,{children:"enums"}),"\u3002\r\n\u5BF9\u4E8E",(0,d.jsx)(a.code,{children:"Result"}),"\uFF0C\u503C\u662F",(0,d.jsx)(a.code,{children:"Ok"}),"\u6216\u8005",(0,d.jsx)(a.code,{children:"Err"}),"\u3002",(0,d.jsx)(a.code,{children:"Ok"}),"\u4EE3\u8868\u64CD\u4F5C\u6210\u529F\uFF0C\u5305\u542B\u5728",(0,d.jsx)(a.code,{children:"Ok(...)"}),"\u4E2D\u7684\u5C31\u662F\u6210\u529F\u751F\u6210\u7684\u503C\uFF0C",(0,d.jsx)(a.code,{children:"Err"}),"\u76F8\u53CD\uFF0C\u4F1A\u5305\u542B\u5931\u8D25\u7684\u65B9\u5F0F\u548C\u539F\u56E0\u3002\r\n",(0,d.jsx)(a.code,{children:"Result"}),"\u7C7B\u578B\u7684\u76EE\u7684\u662F\u7F16\u7801\u9519\u8BEF\u5904\u7406\u4FE1\u606F\u3002",(0,d.jsx)(a.code,{children:"io::Result"}),"\u7684\u5B9E\u4F8B\u6709\u4E00\u4E2A",(0,d.jsx)(a.a,{href:"https://doc.rust-lang.org/std/result/enum.Result.html#method.expect",children:(0,d.jsx)(a.code,{children:"expect"})}),"\u65B9\u6CD5\uFF0C\u5982\u679C\u5B9E\u4F8B\u662F\u4E00\u4E2A",(0,d.jsx)(a.code,{children:"Err"}),"\u503C\uFF0C",(0,d.jsx)(a.code,{children:"expect"}),"\u4F1A\u4FC3\u4F7F\u7A0B\u5E8F\u5D29\u6E83\u5E76\u663E\u793A\u4F20\u9012\u7ED9\u5B83\u7684\u53C2\u6570\uFF1B\u5982\u679C\u662F\u4E00\u4E2A",(0,d.jsx)(a.code,{children:"Ok"}),"\uFF0C",(0,d.jsx)(a.code,{children:"expect"}),"\u4F1A\u53D6\u5230",(0,d.jsx)(a.code,{children:"Ok"}),"\u5305\u542B\u7684\u503C\u5E76\u8FD4\u56DE\u3002\u5728\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\uFF0C\u8FD9\u4E2A\u503C\u662F\u7528\u6237\u8F93\u5165\u5230\u6807\u51C6\u8F93\u5165\u4E2D\u7684\u5B57\u8282\u6570\u3002\r\n\u5982\u679C\u6CA1\u6709\u8C03\u7528",(0,d.jsx)(a.code,{children:"expect"}),"\uFF0C\u7A0B\u5E8F\u4F1A\u53D8\u5F02\u4F46\u662F\u4F1A\u629B\u51FA\u4E00\u4E2A\u8B66\u544A\uFF1A"]}),"\n",(0,d.jsx)(a.pre,{children:(0,d.jsx)(a.code,{className:"language-shell",children:"$ cargo build\r\n   Compiling guessing_game v0.1.0 (file:///projects/guessing_game)\r\nwarning: unused `std::result::Result` that must be used\r\n  --> src/main.rs:10:5\r\n   |\r\n10 |     io::stdin().read_line(&mut guess);\r\n   |     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\r\n   |\r\n   = note: `#[warn(unused_must_use)]` on by default\r\n   = note: this `Result` may be an `Err` variant, which should be handled\r\n\r\nwarning: 1 warning emitted\r\n\r\n    Finished dev [unoptimized + debuginfo] target(s) in 0.59s\n"})}),"\n",(0,d.jsxs)(a.p,{children:["rust \u4F1A\u8B66\u544A\u672A\u4F7F\u7528",(0,d.jsx)(a.code,{children:"read_line"}),"\u8FD4\u56DE\u7684",(0,d.jsx)(a.code,{children:"Result"}),"\uFF0C\u8868\u660E\u6CA1\u6709\u5904\u7406\u53EF\u80FD\u7684\u9519\u8BEF\u3002"]}),"\n",(0,d.jsx)(a.h3,{children:"\u4F7F\u7528 println! \u5360\u4F4D\u7B26\u6253\u5370\u503C"}),"\n",(0,d.jsx)(a.pre,{children:(0,d.jsx)(a.code,{className:"language-rust",children:'// {} \u662F\u4E00\u4E2A\u5360\u4F4D\uFF0C\u4E5F\u53EF\u4EE5\u6253\u5370\u591A\u4E2A\u503C println!("x = {} and y = {}", x, y);\r\nprintln!("You guessed: {}", guess);\n'})}),"\n",(0,d.jsx)(a.h3,{children:"\u6D4B\u8BD5\u7B2C\u4E00\u90E8\u5206"}),"\n",(0,d.jsx)(a.pre,{children:(0,d.jsx)(a.code,{className:"language-shell",children:"$ cargo run\r\n   Compiling guessing_game v0.1.0 (file:///projects/guessing_game)\r\n    Finished dev [unoptimized + debuginfo] target(s) in 6.44s\r\n     Running `target/debug/guessing_game`\r\nGuess the number!\r\nPlease input your guess.\r\n6\r\nYou guessed: 6\n"})}),"\n",(0,d.jsx)(a.h2,{children:"\u751F\u6210\u4E00\u4E2A\u968F\u673A\u6570\u4F5C\u4E3A\u731C\u8C1C"}),"\n",(0,d.jsxs)(a.p,{children:["\u63A5\u4E0B\u6765\u9700\u8981\u751F\u6210\u4E00\u4E2A\u968F\u673A\u6570\uFF0Crust team \u63D0\u4F9B\u4E86\u4E00\u4E2A",(0,d.jsx)(a.a,{href:"https://crates.io/crates/rand",children:(0,d.jsx)(a.code,{children:"rand"})})," crate\u3002"]}),"\n",(0,d.jsx)(a.h3,{children:"\u4F7F\u7528 crate \u83B7\u5F97\u66F4\u591A\u529F\u80FD"}),"\n",(0,d.jsxs)(a.p,{children:[(0,d.jsx)(a.a,{href:"https://crates.io/",children:"https://crates.io/"}),"\r\n\u5728 ",(0,d.jsx)(a.em,{children:"Cargo.toml"})," \u4E2D\u6DFB\u52A0\uFF1A"]}),"\n",(0,d.jsx)(a.pre,{children:(0,d.jsx)(a.code,{className:"language-toml",children:'[dependencies]\r\nrand = "0.8.3"\n'})}),"\n",(0,d.jsx)(a.p,{children:"\u91CD\u65B0\u6784\u5EFA\uFF1A"}),"\n",(0,d.jsx)(a.pre,{children:(0,d.jsx)(a.code,{className:"language-shell",children:"$ cargo build\r\n   Compiling cfg-if v1.0.0\r\n   Compiling ppv-lite86 v0.2.10\r\n   Compiling libc v0.2.94\r\n   Compiling getrandom v0.1.16\r\n   Compiling rand_core v0.5.1\r\n   Compiling rand_chacha v0.2.2\r\n   Compiling rand v0.8.3\r\n   Compiling guessing_game v0.1.0 (/Users/recardinal/Desktop/rust/projects/guessing_game)\r\n    Finished dev [unoptimized + debuginfo] target(s) in 3.35s\n"})}),"\n",(0,d.jsx)(a.h3,{children:"Cargo.lock\u5B9E\u73B0\u53EF\u590D\u7528\u7684\u6784\u5EFA"}),"\n",(0,d.jsxs)(a.p,{children:["\u5F53\u7B2C\u4E00\u6B21\u6784\u5EFA\u9879\u76EE\u65F6\uFF0CCargo \u4F1A\u627E\u51FA\u76F8\u7B26\u7684\u4F9D\u8D56\u9879\u7248\u672C\u5199\u5165 ",(0,d.jsx)(a.em,{children:"Cargo.lock"}),"\u3002\u518D\u6B21\u6784\u5EFA\u65F6\uFF0CCargo \u4F1A\u4F7F\u7528 ",(0,d.jsx)(a.em,{children:"Cargo.lock"})," \u4E2D\u6307\u5B9A\u7684\u7248\u672C\u800C\u4E0D\u662F\u518D\u6B21\u5BFB\u627E\u7248\u672C\uFF0C\u76F4\u5230\u5347\u7EA7\u4F9D\u8D56\u7248\u672C\u3002"]}),"\n",(0,d.jsx)(a.h3,{children:"\u5347\u7EA7 crate \u7248\u672C"}),"\n",(0,d.jsx)(a.pre,{children:(0,d.jsx)(a.code,{className:"language-shell",children:"$ cargo update\n"})}),"\n",(0,d.jsxs)(a.p,{children:["\u5982\u679C\u60F3\u8981\u6307\u5B9A\u7684\u7248\u672C\uFF0C\u4FEE\u6539 ",(0,d.jsx)(a.em,{children:"Cargo.toml"}),"\uFF1A"]}),"\n",(0,d.jsx)(a.pre,{children:(0,d.jsx)(a.code,{className:"language-toml",children:'[dependencies]\r\nrand = "0.9.0"\n'})}),"\n",(0,d.jsx)(a.h3,{children:"\u751F\u6210\u968F\u673A\u6570"}),"\n",(0,d.jsxs)(a.p,{children:["\u73B0\u5728\u5DF2\u7ECF\u5C06 ",(0,d.jsx)(a.code,{children:"rand"})," \u6DFB\u52A0\u5230\u4E86 ",(0,d.jsx)(a.em,{children:"Cargo.toml"})," , \u4E0B\u4E00\u6B65\u662F\u7F16\u5199 ",(0,d.jsx)(a.em,{children:"src/main.rs"}),":"]}),"\n",(0,d.jsx)(a.pre,{children:(0,d.jsx)(a.code,{className:"language-rust",children:'use std::io;\r\nuse rand::Rng;\r\n\r\nfn main() {\r\n    println!("Guess the number!");\r\n\r\n    let secret_number = rand::thread_rng().gen_range(1..101);\r\n\r\n    println!("The secret number is: {}", secret_number);\r\n\r\n    println!("Please input your guess.");\r\n\r\n    let mut guess = String::new();\r\n\r\n    io::stdin()\r\n        .read_line(&mut guess)\r\n        .expect("Failed to read line");\r\n\r\n    println!("You guessed: {}", guess);\r\n}\n'})})]})}b.default=function(){var a=arguments.length>0&& void 0!==arguments[0]?arguments[0]:{},b=Object.assign({},(0,e.ah)(),a.components).wrapper;return b?(0,d.jsx)(b,Object.assign({},a,{children:(0,d.jsx)(h,a)})):h(a)}}},function(a){a.O(0,[774,888,179],function(){var b;return a(a.s=8162)}),_N_E=a.O()}])