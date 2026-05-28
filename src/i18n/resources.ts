export const resources = {
  en: {
    translation: {
      ui: {
        language: 'Language',
        lang: {
          en: 'EN',
          zhCN: '中文',
        },
      },
      webResume: {
        brand: 'LIN YICHEN',
        menuLabel: 'Open navigation',
        closeMenuLabel: 'Close navigation',
        nav: [
          { id: 'projects', label: 'Projects' },
          { id: 'skills', label: 'Skills' },
          { id: 'experience', label: 'Experience' },
          { id: 'contact', label: 'Contact' },
        ],
        hero: {
          eyebrow: 'AI Large Model Application Engineer',
          title: 'AI large-model application engineer',
          subtitle: 'Building reliable RAG, Agent, and LLMOps workflows for real products.',
          intro:
            'Focused on taking AI applications from prototype to production: retrieval design, tool calling, evaluation loops, backend services, observability, and cost control.',
          tags: ['RAG', 'Agent Workflow', 'LLMOps', 'FastAPI', 'Vector DB'],
          metrics: [
            { value: '5+', label: 'Years engineering experience' },
            { value: '12+', label: 'AI application projects shipped' },
            { value: '86%', label: 'Knowledge QA first-answer accuracy' },
          ],
        },
        projectsTitle: 'Projects and impact',
        projects: [
          {
            title: 'Enterprise knowledge QA platform',
            meta: '2025 · RAG / Multi-tenant / Permission filtering',
            description:
              'Designed chunking, metadata permissions, hybrid retrieval, reranking, and offline evaluation loops for sales, support, and engineering knowledge workflows.',
          },
          {
            title: 'Intelligent ticket Agent',
            meta: '2024 · Tool calling / CRM / Observability',
            description:
              'Connected classification, similar-case retrieval, missing-information prompts, and recommended actions into a traceable workflow with human handoff.',
          },
          {
            title: 'Multimodal resume parser',
            meta: '2024 · OCR / Embedding / Structured output',
            description:
              'Parsed PDF and image resumes into structured candidate profiles with confidence checks and explainable job-match scoring.',
          },
        ],
        skillsTitle: 'Core capabilities',
        skills: [
          {
            title: 'Large-model application design',
            description:
              'Shape business problems into model workflows with clear inputs, tools, fallbacks, evaluation criteria, and user-facing boundaries.',
            tags: ['Prompt Engineering', 'Function Calling', 'Structured Output'],
          },
          {
            title: 'Retrieval and knowledge systems',
            description:
              'Build production RAG pipelines covering ingestion, splitting, embeddings, query rewrite, hybrid search, reranking, and feedback loops.',
            tags: ['Embedding', 'Query Rewrite', 'Milvus', 'Qdrant'],
          },
          {
            title: 'Backend engineering',
            description:
              'Implement stable service APIs and asynchronous workflows with attention to latency, authorization, monitoring, deployment, and costs.',
            tags: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker'],
          },
          {
            title: 'Product delivery',
            description:
              'Work with product, design, data, and business teams to ship AI features that remain measurable, maintainable, and explainable.',
            tags: ['Evaluation', 'LLMOps', 'Cross-team Collaboration'],
          },
        ],
        experienceTitle: 'Experience',
        experiences: [
          {
            company: 'Xinghe Intelligence · AI Application Engineer',
            period: '2023.06 - Present',
            summary:
              'Lead enterprise AI application architecture and core workflow development across prototype validation, backend APIs, evaluation datasets, monitoring, and cost governance.',
          },
          {
            company: 'CloudStack Software · Backend Engineer',
            period: '2020.07 - 2023.05',
            summary:
              'Built SaaS backend modules for task scheduling, message queues, permissions, and data APIs, developing the engineering foundation for later AI product delivery.',
          },
        ],
        contactTitle: 'Contact',
        contactStatement:
          'Available for AI prototype validation, RAG system design, Agent workflow development, and production optimization.',
        contacts: [
          { label: 'Email', value: 'lin.yichen@example.com', href: 'mailto:lin.yichen@example.com' },
          { label: 'GitHub', value: 'github.com/lin-ai-dev', href: 'https://github.com/lin-ai-dev' },
          { label: 'Location', value: 'Shanghai / Remote' },
        ],
      },
    },
  },
  'zh-CN': {
    translation: {
      ui: {
        language: '语言',
        lang: {
          en: 'EN',
          zhCN: '中文',
        },
      },
      webResume: {
        brand: 'LIN YICHEN',
        menuLabel: '打开导航',
        closeMenuLabel: '关闭导航',
        nav: [
          { id: 'projects', label: '项目' },
          { id: 'skills', label: '能力' },
          { id: 'experience', label: '经历' },
          { id: 'contact', label: '联系' },
        ],
        hero: {
          eyebrow: 'AI Large Model Application Engineer',
          title: 'AI大模型应用开发工程师',
          subtitle: '构建可上线、可评估、可维护的\nRAG、Agent 与\nLLMOps 工作流。',
          intro:
            '专注于大模型应用从原型到生产的落地：检索方案、工具调用、评测闭环、后端服务、可观测性与成本控制。',
          tags: ['RAG', 'Agent Workflow', 'LLMOps', 'FastAPI', 'Vector DB'],
          metrics: [
            { value: '5+', label: '年工程开发经验' },
            { value: '12+', label: '个 AI 应用上线项目' },
            { value: '86%', label: '知识问答首答准确率' },
          ],
        },
        projectsTitle: '项目与影响',
        projects: [
          {
            title: '企业知识库问答平台',
            meta: '2025 · RAG / 多租户 / 权限过滤',
            description:
              '面向售前、客服和研发知识场景，设计文档切分、元数据权限、混合检索、重排与离线评测闭环。',
          },
          {
            title: '智能工单 Agent',
            meta: '2024 · Tool Calling / CRM / 可观测性',
            description:
              '把工单分类、相似案例召回、信息补全与处理建议串成可追踪工作流，并提供人工接管策略。',
          },
          {
            title: '多模态简历解析',
            meta: '2024 · OCR / Embedding / 结构化输出',
            description:
              '支持 PDF 与图片简历解析，输出结构化候选人画像，并提供字段级置信度与岗位匹配解释。',
          },
        ],
        skillsTitle: '核心能力',
        skills: [
          {
            title: '大模型应用设计',
            description:
              '把业务问题拆解为可执行的模型工作流，定义输入、工具、兜底策略、评估标准和用户边界。',
            tags: ['Prompt Engineering', 'Function Calling', '结构化输出'],
          },
          {
            title: '检索与知识系统',
            description:
              '搭建覆盖入库、切分、Embedding、Query Rewrite、混合检索、重排和反馈闭环的生产级 RAG 链路。',
            tags: ['Embedding', 'Query Rewrite', 'Milvus', 'Qdrant'],
          },
          {
            title: '后端工程化',
            description:
              '实现稳定的服务 API 与异步流程，关注延迟、权限、监控、部署和成本治理。',
            tags: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker'],
          },
          {
            title: '产品落地',
            description:
              '与产品、设计、数据和业务团队协作，交付可衡量、可维护、可解释的 AI 功能。',
            tags: ['模型评测', 'LLMOps', '跨团队协作'],
          },
        ],
        experienceTitle: '工作经历',
        experiences: [
          {
            company: '星河智能科技 · AI 应用开发工程师',
            period: '2023.06 - 至今',
            summary:
              '负责企业级大模型应用架构与核心链路开发，覆盖原型验证、后端 API、评测集建设、上线监控与成本治理。',
          },
          {
            company: '云栈软件 · 后端开发工程师',
            period: '2020.07 - 2023.05',
            summary:
              '参与 SaaS 平台后端模块建设，负责任务调度、消息队列、权限体系与数据接口，为 AI 应用工程化打下基础。',
          },
        ],
        contactTitle: '联系',
        contactStatement: '可提供 AI 原型验证、RAG 系统设计、Agent 工作流开发与上线优化。',
        contacts: [
          { label: '邮箱', value: 'lin.yichen@example.com', href: 'mailto:lin.yichen@example.com' },
          { label: 'GitHub', value: 'github.com/lin-ai-dev', href: 'https://github.com/lin-ai-dev' },
          { label: '地点', value: '上海 / 可远程协作' },
        ],
      },
    },
  },
} as const
