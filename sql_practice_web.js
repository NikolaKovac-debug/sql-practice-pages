const difficulties = ["全部", "入门", "基础", "进阶", "实战", "挑战"];
const topics = [
  "全部",
  "SELECT 查询",
  "过滤与排序",
  "文本与空值",
  "聚合分组",
  "JOIN 连接",
  "子查询",
  "表结构与写入",
  "日期时间",
  "窗口函数",
  "CTE 与高级查询",
  "数据质量",
  "综合分析"
];

const lessons = [
  {
    title: "查询整张学生表",
    difficulty: "入门",
    topic: "SELECT 查询",
    goal: "认识 SELECT 和 FROM，先观察 students 表有哪些数据。",
    steps: ["查询 students 表所有列。", "把 * 改成 name, age。", "加上 LIMIT 5 只看前 5 行。"],
    sql: `SELECT *
FROM students;
`
  },
  {
    title: "指定列与别名",
    difficulty: "入门",
    topic: "SELECT 查询",
    goal: "练习选择字段和 AS 别名，让结果列更容易读。",
    steps: ["查询 name、city 两列。", "把 name 命名为 student_name。", "把 city 命名为 home_city。"],
    sql: `SELECT
  name AS student_name,
  city AS home_city
FROM students;
`
  },
  {
    title: "表达式列",
    difficulty: "入门",
    topic: "SELECT 查询",
    goal: "练习在 SELECT 中直接计算新列。",
    steps: ["计算每个学生 5 年后的年龄。", "给计算列起别名。", "只查询年龄小于 22 的学生。"],
    sql: `SELECT
  name,
  age,
  age + 5 AS age_after_5_years
FROM students;
`
  },
  {
    title: "DISTINCT 去重",
    difficulty: "入门",
    topic: "SELECT 查询",
    goal: "练习 DISTINCT，查看表中有哪些不重复的城市。",
    steps: ["查询 students 表里所有城市。", "加 DISTINCT 去重。", "按城市名排序。"],
    sql: `SELECT DISTINCT city
FROM students
ORDER BY city;
`
  },
  {
    title: "LIMIT 控制行数",
    difficulty: "入门",
    topic: "SELECT 查询",
    goal: "练习用 LIMIT 快速预览数据。",
    steps: ["查询 orders 表。", "只取前 3 行。", "换成 products 表再试一次。"],
    sql: `SELECT *
FROM orders
LIMIT 3;
`
  },
  {
    title: "WHERE 单条件过滤",
    difficulty: "入门",
    topic: "过滤与排序",
    goal: "练习 WHERE，把不符合条件的数据过滤掉。",
    steps: ["查询年龄大于 20 的学生。", "改成查询上海学生。", "改成查询商品价格大于 100 的商品。"],
    sql: `SELECT name, age, city
FROM students
WHERE age > 20;
`
  },
  {
    title: "AND 与 OR",
    difficulty: "入门",
    topic: "过滤与排序",
    goal: "练习组合多个过滤条件。",
    steps: ["查询上海且年龄大于 20 的学生。", "改成上海或杭州的学生。", "观察 AND 和 OR 的结果差异。"],
    sql: `SELECT name, age, city
FROM students
WHERE city = '上海'
  AND age > 20;
`
  },
  {
    title: "ORDER BY 单列排序",
    difficulty: "入门",
    topic: "过滤与排序",
    goal: "练习 ASC、DESC 和排序后的 LIMIT。",
    steps: ["按年龄从大到小排序。", "改成从小到大排序。", "只保留前 3 名。"],
    sql: `SELECT name, age, city
FROM students
ORDER BY age DESC
LIMIT 3;
`
  },
  {
    title: "ORDER BY 多列排序",
    difficulty: "基础",
    topic: "过滤与排序",
    goal: "练习在一个排序规则相同时使用第二排序规则。",
    steps: ["先按城市排序。", "同城市内按年龄倒序。", "改成同城市内按姓名排序。"],
    sql: `SELECT name, age, city
FROM students
ORDER BY city ASC, age DESC;
`
  },
  {
    title: "IN 多值过滤",
    difficulty: "基础",
    topic: "过滤与排序",
    goal: "练习 IN，用更短的方式表达多个等值条件。",
    steps: ["查询上海、杭州、成都的学生。", "把城市列表换成北京和深圳。", "对比 OR 写法。"],
    sql: `SELECT name, city
FROM students
WHERE city IN ('上海', '杭州', '成都');
`
  },
  {
    title: "BETWEEN 范围过滤",
    difficulty: "基础",
    topic: "过滤与排序",
    goal: "练习 BETWEEN，查询连续范围内的数据。",
    steps: ["查询年龄 18 到 22 的学生。", "查询金额 100 到 400 的订单。", "注意 BETWEEN 包含边界值。"],
    sql: `SELECT name, age, city
FROM students
WHERE age BETWEEN 18 AND 22;
`
  },
  {
    title: "LIKE 模糊匹配",
    difficulty: "基础",
    topic: "文本与空值",
    goal: "练习 LIKE，用通配符做文本搜索。",
    steps: ["查询名字里包含“小”的学生。", "查询城市以“上”开头的学生。", "改成 NOT LIKE 查看不匹配的数据。"],
    sql: `SELECT name, city
FROM students
WHERE city LIKE '上%';
`
  },
  {
    title: "NOT LIKE 反向匹配",
    difficulty: "基础",
    topic: "文本与空值",
    goal: "练习 NOT LIKE，找出不符合某个文本模式的记录。",
    steps: ["查询城市不是以上开头的学生。", "改成名字不包含“小”。", "理解 % 代表任意长度字符。"],
    sql: `SELECT name, city
FROM students
WHERE city NOT LIKE '上%';
`
  },
  {
    title: "字符串拼接",
    difficulty: "基础",
    topic: "文本与空值",
    goal: "练习 SQLite 中使用 || 拼接文本。",
    steps: ["把姓名和城市拼成一句话。", "给结果列起别名。", "再拼接年龄信息。"],
    sql: `SELECT
  name || ' 来自 ' || city AS intro
FROM students;
`
  },
  {
    title: "NULL 与 COALESCE",
    difficulty: "基础",
    topic: "文本与空值",
    goal: "练习 NULL 判断和 COALESCE 默认值。",
    steps: ["创建包含 NULL 的临时表。", "用 IS NULL 找出空备注。", "用 COALESCE 替换显示文本。"],
    sql: `CREATE TABLE feedback (
  id INTEGER PRIMARY KEY,
  user_name TEXT,
  note TEXT
);

INSERT INTO feedback (user_name, note)
VALUES ('小明', '很好'), ('小红', NULL), ('小李', '');

SELECT
  user_name,
  COALESCE(NULLIF(note, ''), '暂无备注') AS display_note
FROM feedback;
`
  },
  {
    title: "COUNT 与基础统计",
    difficulty: "基础",
    topic: "聚合分组",
    goal: "练习 COUNT、AVG、MIN、MAX 等聚合函数。",
    steps: ["统计学生总数。", "计算平均年龄。", "找出最大和最小年龄。"],
    sql: `SELECT
  COUNT(*) AS student_count,
  ROUND(AVG(age), 1) AS average_age,
  MIN(age) AS min_age,
  MAX(age) AS max_age
FROM students;
`
  },
  {
    title: "SUM 销售额",
    difficulty: "基础",
    topic: "聚合分组",
    goal: "练习 SUM，统计订单金额。",
    steps: ["统计全部订单金额。", "只统计 paid 订单。", "统计 paid 订单数量和金额。"],
    sql: `SELECT
  COUNT(*) AS paid_orders,
  SUM(amount) AS paid_amount
FROM orders
WHERE status = 'paid';
`
  },
  {
    title: "GROUP BY 城市统计",
    difficulty: "基础",
    topic: "聚合分组",
    goal: "练习 GROUP BY，把记录按城市分组汇总。",
    steps: ["统计每个城市学生数。", "计算每个城市平均年龄。", "按人数从多到少排序。"],
    sql: `SELECT
  city,
  COUNT(*) AS student_count,
  ROUND(AVG(age), 1) AS average_age
FROM students
GROUP BY city
ORDER BY student_count DESC;
`
  },
  {
    title: "HAVING 分组过滤",
    difficulty: "基础",
    topic: "聚合分组",
    goal: "练习 HAVING，过滤聚合后的结果。",
    steps: ["按城市分组统计学生数。", "只保留人数不少于 2 的城市。", "把阈值改成 3 看结果。"],
    sql: `SELECT city, COUNT(*) AS student_count
FROM students
GROUP BY city
HAVING COUNT(*) >= 2;
`
  },
  {
    title: "按品类汇总库存",
    difficulty: "基础",
    topic: "聚合分组",
    goal: "练习对商品表做分组汇总。",
    steps: ["按 category 分组。", "统计商品数量和库存总数。", "计算平均价格。"],
    sql: `SELECT
  category,
  COUNT(*) AS product_count,
  SUM(stock) AS total_stock,
  ROUND(AVG(price), 1) AS average_price
FROM products
GROUP BY category
ORDER BY total_stock DESC;
`
  },
  {
    title: "INNER JOIN 课程成绩",
    difficulty: "基础",
    topic: "JOIN 连接",
    goal: "练习用 INNER JOIN 把学生、课程、成绩连起来。",
    steps: ["连接 enrollments 和 students。", "再连接 courses。", "输出学生、课程和分数。"],
    sql: `SELECT
  s.name,
  c.title,
  e.score
FROM enrollments e
JOIN students s ON e.student_id = s.id
JOIN courses c ON e.course_id = c.id
ORDER BY s.name, c.title;
`
  },
  {
    title: "LEFT JOIN 未选课学生",
    difficulty: "进阶",
    topic: "JOIN 连接",
    goal: "练习 LEFT JOIN，找出主表里没有匹配记录的数据。",
    steps: ["从 students 左连接 enrollments。", "筛选 e.course_id IS NULL。", "理解 NULL 代表没有匹配。"],
    sql: `SELECT s.id, s.name
FROM students s
LEFT JOIN enrollments e ON s.id = e.student_id
WHERE e.course_id IS NULL;
`
  },
  {
    title: "每个学生平均分",
    difficulty: "进阶",
    topic: "JOIN 连接",
    goal: "综合 JOIN、GROUP BY、AVG 计算学生平均成绩。",
    steps: ["连接学生表和选课表。", "按学生分组。", "按平均分倒序排序。"],
    sql: `SELECT
  s.name,
  ROUND(AVG(e.score), 1) AS average_score
FROM students s
JOIN enrollments e ON s.id = e.student_id
GROUP BY s.id, s.name
ORDER BY average_score DESC;
`
  },
  {
    title: "课程报名人数",
    difficulty: "进阶",
    topic: "JOIN 连接",
    goal: "练习课程维度的 JOIN 汇总。",
    steps: ["连接 courses 和 enrollments。", "按课程分组。", "统计报名人数和平均分。"],
    sql: `SELECT
  c.title,
  c.teacher,
  COUNT(e.student_id) AS student_count,
  ROUND(AVG(e.score), 1) AS average_score
FROM courses c
LEFT JOIN enrollments e ON c.id = e.course_id
GROUP BY c.id, c.title, c.teacher
ORDER BY student_count DESC;
`
  },
  {
    title: "自连接城市同学",
    difficulty: "进阶",
    topic: "JOIN 连接",
    goal: "练习 self join，找出同一个城市的学生配对。",
    steps: ["把 students 表连接自己。", "要求城市相同。", "用 id 大小避免重复配对。"],
    sql: `SELECT
  a.city,
  a.name AS student_a,
  b.name AS student_b
FROM students a
JOIN students b ON a.city = b.city
WHERE a.id < b.id
ORDER BY a.city;
`
  },
  {
    title: "高于平均分的成绩",
    difficulty: "进阶",
    topic: "子查询",
    goal: "练习标量子查询，筛选高于全体平均分的记录。",
    steps: ["先计算全体平均分。", "把平均分查询放入 WHERE。", "连接学生和课程显示明细。"],
    sql: `SELECT
  s.name,
  c.title,
  e.score
FROM enrollments e
JOIN students s ON e.student_id = s.id
JOIN courses c ON e.course_id = c.id
WHERE e.score > (
  SELECT AVG(score)
  FROM enrollments
)
ORDER BY e.score DESC;
`
  },
  {
    title: "EXISTS 至少选课",
    difficulty: "进阶",
    topic: "子查询",
    goal: "练习 EXISTS，判断是否存在关联记录。",
    steps: ["查询至少选过一门课的学生。", "改成 NOT EXISTS 找未选课学生。", "比较它和 LEFT JOIN 的写法。"],
    sql: `SELECT s.name
FROM students s
WHERE EXISTS (
  SELECT 1
  FROM enrollments e
  WHERE e.student_id = s.id
);
`
  },
  {
    title: "IN 子查询",
    difficulty: "进阶",
    topic: "子查询",
    goal: "练习用子查询返回一组值，再给外层查询过滤。",
    steps: ["找出学过 SQL 基础的学生 id。", "外层查询学生信息。", "改成查询学过业务报表实战的学生。"],
    sql: `SELECT name, city
FROM students
WHERE id IN (
  SELECT e.student_id
  FROM enrollments e
  JOIN courses c ON e.course_id = c.id
  WHERE c.title = 'SQL 基础'
);
`
  },
  {
    title: "相关子查询",
    difficulty: "挑战",
    topic: "子查询",
    goal: "练习外层行和内层查询有关联的相关子查询。",
    steps: ["对每个学生计算自己的平均分。", "只保留平均分高于 88 的学生。", "理解内层查询引用了外层 s.id。"],
    sql: `SELECT s.name, s.city
FROM students s
WHERE (
  SELECT AVG(e.score)
  FROM enrollments e
  WHERE e.student_id = s.id
) > 88;
`
  },
  {
    title: "CREATE TABLE 与 INSERT",
    difficulty: "进阶",
    topic: "表结构与写入",
    goal: "练习建表、字段约束和插入数据。",
    steps: ["创建 notes 表。", "插入两条记录。", "查询 notes 表确认结果。"],
    sql: `CREATE TABLE notes (
  id INTEGER PRIMARY KEY,
  title TEXT NOT NULL,
  done INTEGER DEFAULT 0
);

INSERT INTO notes (title, done)
VALUES ('学习 SELECT', 1), ('练习 JOIN', 0);

SELECT * FROM notes;
`
  },
  {
    title: "UPDATE 修改数据",
    difficulty: "进阶",
    topic: "表结构与写入",
    goal: "练习 UPDATE，并用 WHERE 控制修改范围。",
    steps: ["创建任务表。", "把指定任务改成完成。", "查询修改后的结果。"],
    sql: `CREATE TABLE tasks (
  id INTEGER PRIMARY KEY,
  title TEXT,
  done INTEGER
);

INSERT INTO tasks (title, done)
VALUES ('写 SQL', 0), ('检查结果', 0), ('复盘错题', 0);

UPDATE tasks
SET done = 1
WHERE title = '写 SQL';

SELECT * FROM tasks;
`
  },
  {
    title: "DELETE 删除数据",
    difficulty: "进阶",
    topic: "表结构与写入",
    goal: "练习 DELETE，并理解删除前先 SELECT 的习惯。",
    steps: ["创建日志表。", "删除 debug 级别日志。", "查询剩余日志。"],
    sql: `CREATE TABLE logs (
  id INTEGER PRIMARY KEY,
  level TEXT,
  message TEXT
);

INSERT INTO logs (level, message)
VALUES ('info', 'start'), ('debug', 'tmp'), ('error', 'failed');

DELETE FROM logs
WHERE level = 'debug';

SELECT * FROM logs;
`
  },
  {
    title: "约束失败观察",
    difficulty: "挑战",
    topic: "表结构与写入",
    goal: "观察 PRIMARY KEY 和 NOT NULL 约束如何保护数据。",
    steps: ["创建带主键和非空约束的表。", "插入合法数据。", "尝试插入 NULL 名称观察错误。"],
    sql: `CREATE TABLE members (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL
);

INSERT INTO members (id, name)
VALUES (1, '小明');

INSERT INTO members (id, name)
VALUES (2, NULL);
`
  },
  {
    title: "订单按月汇总",
    difficulty: "进阶",
    topic: "日期时间",
    goal: "练习 strftime，从日期字段中提取月份。",
    steps: ["从 order_date 提取月份。", "按月份汇总 paid 金额。", "按月份升序排序。"],
    sql: `SELECT
  strftime('%Y-%m', order_date) AS order_month,
  SUM(amount) AS paid_amount
FROM orders
WHERE status = 'paid'
GROUP BY order_month
ORDER BY order_month;
`
  },
  {
    title: "最近订单",
    difficulty: "进阶",
    topic: "日期时间",
    goal: "练习日期排序和 LIMIT，找出最近发生的订单。",
    steps: ["按 order_date 倒序排序。", "只取最近 5 单。", "只看 paid 状态订单。"],
    sql: `SELECT id, customer, amount, status, order_date
FROM orders
WHERE status = 'paid'
ORDER BY order_date DESC
LIMIT 5;
`
  },
  {
    title: "日期差计算",
    difficulty: "挑战",
    topic: "日期时间",
    goal: "练习 julianday，计算订单距离最后一单相差多少天。",
    steps: ["找出每条订单日期。", "用 MAX(order_date) 做基准。", "计算日期差。"],
    sql: `SELECT
  id,
  customer,
  order_date,
  CAST(julianday((SELECT MAX(order_date) FROM orders)) - julianday(order_date) AS INTEGER) AS days_before_latest
FROM orders
ORDER BY order_date DESC;
`
  },
  {
    title: "ROW_NUMBER 排名",
    difficulty: "挑战",
    topic: "窗口函数",
    goal: "练习 ROW_NUMBER，为成绩生成全局排名。",
    steps: ["按分数倒序编号。", "连接学生和课程。", "观察同分时 row_number 的结果。"],
    sql: `SELECT
  ROW_NUMBER() OVER (ORDER BY e.score DESC) AS rank_no,
  s.name,
  c.title,
  e.score
FROM enrollments e
JOIN students s ON e.student_id = s.id
JOIN courses c ON e.course_id = c.id;
`
  },
  {
    title: "RANK 课程内排名",
    difficulty: "挑战",
    topic: "窗口函数",
    goal: "练习 PARTITION BY，在每门课程内部排名。",
    steps: ["按课程分区。", "分区内按成绩倒序排名。", "比较 RANK 和 ROW_NUMBER。"],
    sql: `SELECT
  c.title,
  s.name,
  e.score,
  RANK() OVER (
    PARTITION BY c.id
    ORDER BY e.score DESC
  ) AS course_rank
FROM enrollments e
JOIN students s ON e.student_id = s.id
JOIN courses c ON e.course_id = c.id
ORDER BY c.title, course_rank;
`
  },
  {
    title: "累计销售额",
    difficulty: "挑战",
    topic: "窗口函数",
    goal: "练习窗口 SUM，计算随时间累积的销售额。",
    steps: ["只保留 paid 订单。", "按日期排序。", "计算累计销售额。"],
    sql: `SELECT
  order_date,
  customer,
  amount,
  SUM(amount) OVER (
    ORDER BY order_date
    ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW
  ) AS running_amount
FROM orders
WHERE status = 'paid'
ORDER BY order_date;
`
  },
  {
    title: "LAG 上一单对比",
    difficulty: "挑战",
    topic: "窗口函数",
    goal: "练习 LAG，比较当前订单和上一笔已支付订单金额。",
    steps: ["只查询 paid 订单。", "取上一笔订单金额。", "计算当前金额减上一笔金额。"],
    sql: `SELECT
  order_date,
  customer,
  amount,
  LAG(amount) OVER (ORDER BY order_date) AS previous_amount,
  amount - LAG(amount) OVER (ORDER BY order_date) AS amount_change
FROM orders
WHERE status = 'paid'
ORDER BY order_date;
`
  },
  {
    title: "CTE 简化查询",
    difficulty: "进阶",
    topic: "CTE 与高级查询",
    goal: "练习 WITH，把中间结果命名后再查询。",
    steps: ["先用 CTE 汇总每个学生平均分。", "外层筛选平均分大于 85 的学生。", "按平均分排序。"],
    sql: `WITH student_scores AS (
  SELECT
    s.name,
    ROUND(AVG(e.score), 1) AS average_score
  FROM students s
  JOIN enrollments e ON s.id = e.student_id
  GROUP BY s.id, s.name
)
SELECT *
FROM student_scores
WHERE average_score > 85
ORDER BY average_score DESC;
`
  },
  {
    title: "多段 CTE",
    difficulty: "挑战",
    topic: "CTE 与高级查询",
    goal: "练习多个 CTE 串联，逐步完成复杂分析。",
    steps: ["第一个 CTE 过滤 paid 订单。", "第二个 CTE 按客户汇总。", "外层做客户分层。"],
    sql: `WITH paid_orders AS (
  SELECT *
  FROM orders
  WHERE status = 'paid'
),
customer_total AS (
  SELECT customer, SUM(amount) AS total_amount
  FROM paid_orders
  GROUP BY customer
)
SELECT
  customer,
  total_amount,
  CASE
    WHEN total_amount >= 500 THEN '高价值'
    WHEN total_amount >= 200 THEN '中等'
    ELSE '普通'
  END AS customer_level
FROM customer_total
ORDER BY total_amount DESC;
`
  },
  {
    title: "UNION 合并结果",
    difficulty: "进阶",
    topic: "CTE 与高级查询",
    goal: "练习 UNION，把结构相同的查询结果合并。",
    steps: ["查询上海学生。", "查询杭州学生。", "用 UNION 合并结果。"],
    sql: `SELECT name, city
FROM students
WHERE city = '上海'

UNION

SELECT name, city
FROM students
WHERE city = '杭州';
`
  },
  {
    title: "CASE WHEN 标签",
    difficulty: "进阶",
    topic: "CTE 与高级查询",
    goal: "练习 CASE WHEN，把数值转换为业务可读标签。",
    steps: ["按库存数量生成状态。", "把库存为 0 标为缺货。", "把库存小于 10 标为低库存。"],
    sql: `SELECT
  name,
  category,
  stock,
  CASE
    WHEN stock = 0 THEN '缺货'
    WHEN stock < 10 THEN '低库存'
    ELSE '正常'
  END AS stock_status
FROM products
ORDER BY stock ASC;
`
  },
  {
    title: "重复数据检查",
    difficulty: "实战",
    topic: "数据质量",
    goal: "练习用 GROUP BY 和 HAVING 检查重复记录。",
    steps: ["创建一张含重复手机号的用户表。", "按 phone 分组计数。", "只保留重复手机号。"],
    sql: `CREATE TABLE users (
  id INTEGER PRIMARY KEY,
  name TEXT,
  phone TEXT
);

INSERT INTO users (name, phone)
VALUES ('小明', '138'), ('小红', '139'), ('小李', '138');

SELECT phone, COUNT(*) AS repeat_count
FROM users
GROUP BY phone
HAVING COUNT(*) > 1;
`
  },
  {
    title: "缺失值检查",
    difficulty: "实战",
    topic: "数据质量",
    goal: "练习找出关键字段为空的数据。",
    steps: ["创建含 NULL 和空字符串的表。", "用 IS NULL 检查真正空值。", "用 TRIM 检查空字符串。"],
    sql: `CREATE TABLE profiles (
  id INTEGER PRIMARY KEY,
  name TEXT,
  email TEXT
);

INSERT INTO profiles (name, email)
VALUES ('小明', 'a@example.com'), ('小红', NULL), ('小李', '   ');

SELECT *
FROM profiles
WHERE email IS NULL
   OR TRIM(email) = '';
`
  },
  {
    title: "异常值检查",
    difficulty: "实战",
    topic: "数据质量",
    goal: "练习用条件过滤发现明显不合理的数据。",
    steps: ["创建商品价格表。", "插入负价格和超高价格。", "筛选异常记录。"],
    sql: `CREATE TABLE price_checks (
  id INTEGER PRIMARY KEY,
  product TEXT,
  price REAL
);

INSERT INTO price_checks (product, price)
VALUES ('A', 29), ('B', -3), ('C', 99999);

SELECT *
FROM price_checks
WHERE price <= 0
   OR price > 10000;
`
  },
  {
    title: "订单状态分布",
    difficulty: "实战",
    topic: "综合分析",
    goal: "统计订单状态分布，是常见运营看板指标。",
    steps: ["按 status 分组。", "统计订单数量。", "计算状态金额合计。"],
    sql: `SELECT
  status,
  COUNT(*) AS order_count,
  SUM(amount) AS total_amount
FROM orders
GROUP BY status
ORDER BY order_count DESC;
`
  },
  {
    title: "城市销售额排行",
    difficulty: "实战",
    topic: "综合分析",
    goal: "用聚合分析不同城市的已支付销售额。",
    steps: ["只统计 paid 订单。", "按 city 汇总金额。", "按销售额倒序排列。"],
    sql: `SELECT
  city,
  COUNT(*) AS paid_orders,
  SUM(amount) AS paid_amount
FROM orders
WHERE status = 'paid'
GROUP BY city
ORDER BY paid_amount DESC;
`
  },
  {
    title: "客户消费分层",
    difficulty: "实战",
    topic: "综合分析",
    goal: "用 CASE 和聚合把客户分成不同价值层级。",
    steps: ["按客户汇总 paid 金额。", "设置高价值、中等、普通三个层级。", "按总金额倒序输出。"],
    sql: `SELECT
  customer,
  SUM(amount) AS total_amount,
  CASE
    WHEN SUM(amount) >= 500 THEN '高价值'
    WHEN SUM(amount) >= 200 THEN '中等'
    ELSE '普通'
  END AS customer_level
FROM orders
WHERE status = 'paid'
GROUP BY customer
ORDER BY total_amount DESC;
`
  },
  {
    title: "课程成绩排行榜",
    difficulty: "实战",
    topic: "综合分析",
    goal: "综合 JOIN 和聚合，生成课程成绩表现报表。",
    steps: ["按课程统计报名人数。", "计算平均分、最高分和最低分。", "按平均分倒序排序。"],
    sql: `SELECT
  c.title,
  COUNT(e.student_id) AS student_count,
  ROUND(AVG(e.score), 1) AS average_score,
  MAX(e.score) AS max_score,
  MIN(e.score) AS min_score
FROM courses c
JOIN enrollments e ON c.id = e.course_id
GROUP BY c.id, c.title
ORDER BY average_score DESC;
`
  },
  {
    title: "商品补货建议",
    difficulty: "实战",
    topic: "综合分析",
    goal: "把库存数据转成可执行的补货建议。",
    steps: ["筛选 stock 小于 10 的商品。", "根据库存计算建议补货量。", "按紧急程度排序。"],
    sql: `SELECT
  name,
  category,
  stock,
  CASE
    WHEN stock = 0 THEN 20
    ELSE 10 - stock
  END AS suggested_restock
FROM products
WHERE stock < 10
ORDER BY stock ASC;
`
  },
  {
    title: "月度销售趋势",
    difficulty: "实战",
    topic: "综合分析",
    goal: "把日期、过滤、聚合组合起来，形成趋势报表。",
    steps: ["按月份汇总 paid 订单。", "统计订单数和销售额。", "按月份升序展示趋势。"],
    sql: `SELECT
  strftime('%Y-%m', order_date) AS month,
  COUNT(*) AS paid_orders,
  SUM(amount) AS paid_amount
FROM orders
WHERE status = 'paid'
GROUP BY month
ORDER BY month;
`
  },
  {
    title: "城市客单价",
    difficulty: "实战",
    topic: "综合分析",
    goal: "练习从订单数和销售额派生平均客单价。",
    steps: ["只统计 paid 订单。", "按城市汇总订单数和销售额。", "计算平均订单金额。"],
    sql: `SELECT
  city,
  COUNT(*) AS paid_orders,
  SUM(amount) AS paid_amount,
  ROUND(SUM(amount) / COUNT(*), 1) AS average_order_amount
FROM orders
WHERE status = 'paid'
GROUP BY city
ORDER BY average_order_amount DESC;
`
  },
  {
    title: "高分学生画像",
    difficulty: "实战",
    topic: "综合分析",
    goal: "综合 JOIN、GROUP BY、HAVING，找出平均分较高的学生。",
    steps: ["计算每个学生平均分。", "只保留平均分大于等于 88 的学生。", "展示城市和选课数量。"],
    sql: `SELECT
  s.name,
  s.city,
  COUNT(e.course_id) AS course_count,
  ROUND(AVG(e.score), 1) AS average_score
FROM students s
JOIN enrollments e ON s.id = e.student_id
GROUP BY s.id, s.name, s.city
HAVING AVG(e.score) >= 88
ORDER BY average_score DESC;
`
  },
  {
    title: "高级综合：课程 Top 1",
    difficulty: "挑战",
    topic: "综合分析",
    goal: "用窗口函数找出每门课程成绩最高的学生。",
    steps: ["先连接学生、课程、成绩。", "用 RANK 按课程分区排名。", "外层筛选 rank = 1。"],
    sql: `WITH ranked_scores AS (
  SELECT
    c.title,
    s.name,
    e.score,
    RANK() OVER (
      PARTITION BY c.id
      ORDER BY e.score DESC
    ) AS rank_no
  FROM enrollments e
  JOIN students s ON e.student_id = s.id
  JOIN courses c ON e.course_id = c.id
)
SELECT title, name, score
FROM ranked_scores
WHERE rank_no = 1
ORDER BY title;
`
  },
  {
    title: "高级综合：客户复购",
    difficulty: "挑战",
    topic: "综合分析",
    goal: "识别已支付订单数大于 1 的复购客户。",
    steps: ["只保留 paid 订单。", "按 customer 分组。", "用 HAVING 找出订单数大于 1 的客户。"],
    sql: `SELECT
  customer,
  COUNT(*) AS paid_order_count,
  SUM(amount) AS total_amount
FROM orders
WHERE status = 'paid'
GROUP BY customer
HAVING COUNT(*) > 1
ORDER BY total_amount DESC;
`
  },
  {
    title: "高级综合：库存资金占用",
    difficulty: "挑战",
    topic: "综合分析",
    goal: "用商品价格和库存计算库存金额，找出占用资金最高的品类。",
    steps: ["计算每个商品库存金额。", "按 category 汇总。", "按库存金额倒序排序。"],
    sql: `SELECT
  category,
  SUM(price * stock) AS inventory_value,
  COUNT(*) AS product_count
FROM products
GROUP BY category
ORDER BY inventory_value DESC;
`
  }
];

const caseList = document.querySelector("#caseList");
const caseCount = document.querySelector("#caseCount");
const difficultyFilter = document.querySelector("#difficultyFilter");
const topicFilter = document.querySelector("#topicFilter");
const sqlEditor = document.querySelector("#sqlEditor");
const runButton = document.querySelector("#runSql");
const resetButton = document.querySelector("#resetSql");
const revealButton = document.querySelector("#revealAnswer");
const answerPanel = document.querySelector("#answerPanel");
const answerOutput = document.querySelector("#answerOutput");
const terminalOutput = document.querySelector("#terminalOutput");
const serverStatus = document.querySelector("#serverStatus");
const lessonTitle = document.querySelector("#lessonTitle");
const lessonDifficulty = document.querySelector("#lessonDifficulty");
const lessonTopic = document.querySelector("#lessonTopic");
const lessonGoal = document.querySelector("#lessonGoal");
const lessonSteps = document.querySelector("#lessonSteps");

let activeLesson = 0;
let answerVisible = false;
let hasSelectedLesson = false;
let SQL = null;
let sqliteReady = false;
const draftPrefix = "sql-practice-web-draft:";
const draftCache = new Map();

function fillSelect(select, values) {
  select.innerHTML = values.map((value) => `<option value="${value}">${value}</option>`).join("");
}

function draftKey(index) {
  return `${draftPrefix}${index}`;
}

function saveCurrentDraft() {
  const value = sqlEditor.value;
  draftCache.set(activeLesson, value);

  try {
    localStorage.setItem(draftKey(activeLesson), value);
  } catch (error) {
    console.warn("无法写入本地草稿", error);
  }
}

function loadDraft(index) {
  if (draftCache.has(index)) {
    return draftCache.get(index);
  }

  try {
    return localStorage.getItem(draftKey(index)) || "";
  } catch (error) {
    console.warn("无法读取本地草稿", error);
    return "";
  }
}

function clearDraft(index) {
  draftCache.delete(index);

  try {
    localStorage.removeItem(draftKey(index));
  } catch (error) {
    console.warn("无法清理本地草稿", error);
  }
}

function getFilteredLessons() {
  return lessons
    .map((lesson, index) => ({ lesson, index }))
    .filter(({ lesson }) => difficultyFilter.value === "全部" || lesson.difficulty === difficultyFilter.value)
    .filter(({ lesson }) => topicFilter.value === "全部" || lesson.topic === topicFilter.value);
}

function renderLessons() {
  const filteredLessons = getFilteredLessons();
  caseList.innerHTML = "";
  caseCount.textContent = `${filteredLessons.length} 个练习`;

  if (!filteredLessons.length) {
    caseList.innerHTML = '<p class="empty-state">没有匹配的练习，换一个筛选条件试试。</p>';
    return;
  }

  filteredLessons.forEach(({ lesson, index }) => {
    const button = document.createElement("button");
    button.className = `case-button${index === activeLesson ? " active" : ""}`;
    button.type = "button";
    button.innerHTML = `
      <strong>${index + 1}. ${lesson.title}</strong>
      <span>${lesson.difficulty} · ${lesson.topic}</span>
      <small>${lesson.goal}</small>
    `;
    button.addEventListener("click", () => selectLesson(index));
    caseList.appendChild(button);
  });
}

function selectLesson(index) {
  if (hasSelectedLesson) {
    saveCurrentDraft();
  }

  activeLesson = index;
  hasSelectedLesson = true;
  const lesson = lessons[index];

  lessonTitle.textContent = lesson.title;
  lessonDifficulty.textContent = lesson.difficulty;
  lessonTopic.textContent = lesson.topic;
  lessonGoal.textContent = lesson.goal;
  lessonSteps.innerHTML = lesson.steps.map((step) => `<li>${step}</li>`).join("");
  sqlEditor.value = loadDraft(index);
  hideAnswer();
  terminalOutput.textContent = "等待运行...";
  renderLessons();
}

function showAnswer() {
  answerVisible = true;
  answerOutput.textContent = lessons[activeLesson].sql;
  answerPanel.hidden = false;
  revealButton.textContent = "隐藏答案";
}

function hideAnswer() {
  answerVisible = false;
  answerOutput.textContent = "";
  answerPanel.hidden = true;
  revealButton.textContent = "显示答案";
}

function toggleAnswer() {
  if (answerVisible) {
    hideAnswer();
  } else {
    showAnswer();
  }
}

function selectFirstVisibleLesson() {
  const filteredLessons = getFilteredLessons();
  if (filteredLessons.length) {
    selectLesson(filteredLessons[0].index);
  } else {
    renderLessons();
  }
}

async function initializeSqlite() {
  if (window.location.protocol === "file:") {
    serverStatus.textContent = "请用本地网页服务打开";
    serverStatus.className = "status offline";
    runButton.disabled = true;
    terminalOutput.textContent = [
      "检测到当前是 file:// 直接打开。",
      "Chrome 通常会阻止或卡住 sql.js 的 WASM 文件加载。",
      "",
      "请在项目目录运行：",
      "python -m http.server 8002",
      "",
      "然后打开：",
      "http://127.0.0.1:8002/sql_practice_web.html"
    ].join("\n");
    return;
  }

  if (typeof initSqlJs !== "function") {
    serverStatus.textContent = "缺少本地 sql.js 依赖";
    serverStatus.className = "status offline";
    runButton.disabled = true;
    terminalOutput.textContent = [
      "未找到 vendor/sqljs/sql-wasm.js。",
      "此 Web 版不会从 CDN 加载依赖。",
      "请把固定版本 sql.js 的 sql-wasm.js 和 sql-wasm.wasm 放到 vendor/sqljs/ 后再刷新。"
    ].join("\n");
    return;
  }

  try {
    SQL = await withTimeout(
      initSqlJs({
        locateFile: (file) => `vendor/sqljs/${file}`
      }),
      30000,
      "SQLite WASM 加载超时。请刷新重试，或确认浏览器没有拦截 GitHub Pages 的 wasm 文件。"
    );
    sqliteReady = true;
    serverStatus.textContent = "浏览器 SQLite 已就绪";
    serverStatus.className = "status online";
    runButton.disabled = false;
  } catch (error) {
    serverStatus.textContent = "SQLite WASM 加载失败";
    serverStatus.className = "status offline";
    runButton.disabled = true;
    terminalOutput.textContent = `加载失败: ${error.message}`;
  }
}

function withTimeout(promise, timeoutMs, message) {
  return Promise.race([
    promise,
    new Promise((_, reject) => {
      window.setTimeout(() => reject(new Error(message)), timeoutMs);
    })
  ]);
}

function createPracticeDb() {
  const db = new SQL.Database();
  db.run(`
    CREATE TABLE students (
      id INTEGER PRIMARY KEY,
      name TEXT NOT NULL,
      age INTEGER NOT NULL,
      city TEXT NOT NULL
    );

    CREATE TABLE courses (
      id INTEGER PRIMARY KEY,
      title TEXT NOT NULL,
      teacher TEXT NOT NULL
    );

    CREATE TABLE enrollments (
      student_id INTEGER NOT NULL,
      course_id INTEGER NOT NULL,
      score INTEGER NOT NULL
    );

    CREATE TABLE orders (
      id INTEGER PRIMARY KEY,
      customer TEXT NOT NULL,
      city TEXT NOT NULL,
      amount REAL NOT NULL,
      status TEXT NOT NULL,
      order_date TEXT NOT NULL
    );

    CREATE TABLE products (
      id INTEGER PRIMARY KEY,
      name TEXT NOT NULL,
      category TEXT NOT NULL,
      price REAL NOT NULL,
      stock INTEGER NOT NULL
    );

    INSERT INTO students (id, name, age, city) VALUES
      (1, '小明', 18, '上海'),
      (2, '小红', 21, '杭州'),
      (3, '小李', 22, '上海'),
      (4, '小王', 19, '北京'),
      (5, '小张', 24, '深圳'),
      (6, '小赵', 20, '杭州'),
      (7, '小周', 23, '成都'),
      (8, '小陈', 18, '上海'),
      (9, '小林', 25, '广州');

    INSERT INTO courses (id, title, teacher) VALUES
      (1, 'SQL 基础', '陈老师'),
      (2, 'Python 数据分析', '王老师'),
      (3, '可视化入门', '李老师'),
      (4, '业务报表实战', '周老师');

    INSERT INTO enrollments (student_id, course_id, score) VALUES
      (1, 1, 92), (1, 2, 88), (2, 1, 95), (2, 3, 91),
      (3, 1, 76), (3, 2, 83), (4, 3, 89), (5, 2, 97),
      (5, 4, 93), (6, 1, 81), (7, 4, 86);

    INSERT INTO orders (id, customer, city, amount, status, order_date) VALUES
      (1, 'A 公司', '上海', 320, 'paid', '2026-01-05'),
      (2, 'B 公司', '杭州', 180, 'paid', '2026-01-12'),
      (3, 'A 公司', '上海', 260, 'paid', '2026-02-03'),
      (4, 'C 公司', '深圳', 90, 'cancelled', '2026-02-10'),
      (5, 'D 公司', '北京', 450, 'paid', '2026-03-01'),
      (6, 'B 公司', '杭州', 120, 'paid', '2026-03-16'),
      (7, 'E 公司', '成都', 75, 'pending', '2026-04-02'),
      (8, 'F 公司', '广州', 510, 'paid', '2026-04-18'),
      (9, 'A 公司', '上海', 210, 'paid', '2026-05-04'),
      (10, 'G 公司', '深圳', 360, 'paid', '2026-05-12'),
      (11, 'B 公司', '杭州', 95, 'cancelled', '2026-05-15'),
      (12, 'H 公司', '成都', 280, 'paid', '2026-05-22');

    INSERT INTO products (id, name, category, price, stock) VALUES
      (1, '机械键盘', '外设', 299, 8),
      (2, '无线鼠标', '外设', 129, 25),
      (3, '显示器', '办公', 1299, 3),
      (4, '笔记本支架', '办公', 89, 0),
      (5, '咖啡豆', '食品', 68, 42),
      (6, '数据线', '配件', 29, 6);
  `);
  return db;
}

function formatQueryResults(results) {
  if (!results.length) {
    return "[语句 1] 执行成功，没有返回结果。";
  }

  return results.map((item, index) => {
    const columns = item.columns;
    const rows = item.values.map((row) => row.map((value) => value === null ? "NULL" : value));

    if (!rows.length) {
      return `[语句 ${index + 1}] 查询成功，结果为空。`;
    }

    const widths = columns.map((column) => column.length);
    rows.forEach((row) => {
      row.forEach((value, columnIndex) => {
        widths[columnIndex] = Math.max(widths[columnIndex], String(value).length);
      });
    });

    const header = columns.map((column, columnIndex) => column.padEnd(widths[columnIndex])).join(" | ");
    const line = widths.map((width) => "-".repeat(width)).join("-+-");
    const body = rows.map((row) => row.map((value, columnIndex) => String(value).padEnd(widths[columnIndex])).join(" | "));

    return [`[语句 ${index + 1}] ${rows.length} 行`, header, line, ...body].join("\n");
  }).join("\n\n");
}

async function runSql() {
  if (!sqliteReady) {
    terminalOutput.textContent = "浏览器 SQLite 尚未加载完成。";
    return;
  }

  runButton.disabled = true;
  runButton.textContent = "运行中";
  terminalOutput.textContent = "正在执行...";

  const db = createPracticeDb();
  try {
    const results = db.exec(sqlEditor.value);
    terminalOutput.textContent = formatQueryResults(results);
  } catch (error) {
    terminalOutput.textContent = `SQL 错误:\n${error.message}`;
  } finally {
    db.close();
    runButton.disabled = false;
    runButton.textContent = "运行";
  }
}

sqlEditor.addEventListener("keydown", (event) => {
  if (event.key === "Tab") {
    event.preventDefault();
    const start = sqlEditor.selectionStart;
    const end = sqlEditor.selectionEnd;
    sqlEditor.value = `${sqlEditor.value.slice(0, start)}  ${sqlEditor.value.slice(end)}`;
    sqlEditor.selectionStart = start + 2;
    sqlEditor.selectionEnd = start + 2;
    saveCurrentDraft();
  }
});

sqlEditor.addEventListener("input", saveCurrentDraft);

difficultyFilter.addEventListener("change", selectFirstVisibleLesson);
topicFilter.addEventListener("change", selectFirstVisibleLesson);
runButton.addEventListener("click", runSql);
resetButton.addEventListener("click", () => {
  clearDraft(activeLesson);
  sqlEditor.value = "";
  hideAnswer();
  terminalOutput.textContent = "等待运行...";
});
revealButton.addEventListener("click", toggleAnswer);

fillSelect(difficultyFilter, difficulties);
fillSelect(topicFilter, topics);
selectLesson(0);
initializeSqlite();
