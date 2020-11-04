# Lua API

## 概述

删除Lua的一些特性，不提供io, os, coroutine, debug, package库。<br/>
不支持：<br/>
collectgarbage, dofile, getmetatable, loadfile, load, lpcall, setmetatable, xpcall.<br/>
支持：<br/>
assert, error, ipairs, next, pairs, warn, tonumber, tostring, type.<br/>
保留Lua table以及基本的语法。<br/>

## 方法列表
| 方法                                          | 描述                              			|
| :-------------------------------------------------- | :------------------------------             |
|require_owner_auth():bool                              | 当前执行合约的账户是否是合约父账户。 |
|exec_account():string                                 	| 获取当前调用合约账户。              |
|get_balance():number                                	| 获取合约父账户余额。         |
|get_pay_fee():string,number,string                     | 获取合约调用者交易费用信息。                 |
|create_key(key:string):nil                             | 创建名为key的string属性。                    |
|set_key(key:string, value:string):nil                  | 设置string属性的key和value。                 |
|get_key(key:string):string                             | 返回名为key的string属性。                   |
|lcreate(key:string):nil								|创建名为key的list属性。                        |
|lpush(key:string, value:string):nil					|往名为key的list属性左边添加value。              |
|rpush(key:string, value:string):nil					|往名为key的list属性右边添加value。              |
|lpop(key:string):string								|删除名为key的list属性左边1个元素，返回删除元素。|
|rpop(key:string):string								|删除为key的list属性右边1个元素，返回删除元素。|
|ldel(key:string):nil									|删除名为key的list属性。                        |
|llen(key:string):number								|返回名为key的list属性的长度。                  |
|lall(key:string):table									|返回名为key的list属性所有元素。                 |
|hcreate(key:string):nil								|创建名为key的hash_map属性。                    |
|hset(key:string, field:string, value:string):nil		|往名为key的hash_map中添加kv，分别为field和value。|
|hget(key:string, field:string):string					|返回名为key的hash_map中k为field的value。       |
|hlen(key:string):number								|返回名为key的hash_map的size。                  |
|hdel(key:string):nil									|删除名为key的hash_map。                       |
|grant(account:string, amount:number):nil				|给account转账amount金额。                     |
|random_seed():number									|account下的随机数。                             |

## 单聊合约示例

首先需要双方都加入聊天，然后调用send_chat发送聊天。

```lua
-- 
IN 	            = '1';
OUT             = '0';
MAX_NUMBER      = 256;--最大聊天记录数
MAX_CONTENT_LEN = 128;--最长聊天内容
CHAT_USERS_KEY 	= 'chat_users';
CHAT_KEY 		= 'chat';
SENDER 			= 'sender';
RECEIVER 		= 'receiver';
TIMESTAMP 		= 'timestamp';
CONTENT			= 'content';
-- 初始化方法
function init()
    lcreate(CHAT_KEY);
	hcreate(CHAT_USERS_KEY);
end
-- 添加用户
function add_user()
	hset(CHAT_USERS_KEY, exec_account(), IN);
end
-- 删除用户
function del_user()
	hset(CHAT_USERS_KEY, exec_account(), OUT);
end
--[[
发送聊天
receiver 	接收者
timestamp 	时间戳
content		聊天内容
--]]
function send_chat(receiver, timestamp, content)
	local sender = exec_account();
	local sender_user_state = hget(CHAT_USERS_KEY, sender);
	local receiver_user_state = hget(CHAT_USERS_KEY, receiver);
	if sender_user_state ~= IN or receiver_user_state ~= IN then
		error('user first need add to chat_users');
	end
	if #content >= MAX_CONTENT_LEN then
		error('content length must less than '.. MAX_CONTENT_LEN);
	end
	if llen(CHAT_KEY) >= MAX_NUMBER then
		lpop(CHAT_KEY);
	end
    local chat_info = '{"'.. SENDER .. '":"' .. sender .. '","' .. RECEIVER .. '":"' .. receiver .. '","'.. TIMESTAMP .. '":' .. timestamp ..',"'.. CONTENT .. '":"' .. content .. '"}';
	rpush(CHAT_KEY, chat_info);
end
```