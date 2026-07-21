import { Users } from 'lucide-react';
import PagePlaceholder from '../components/PagePlaceholder';

export default function CasesPage() {
  return (
    <PagePlaceholder
      eyebrow="客户案例"
      title="与领先企业一起，重塑客户服务体验"
      description="汇聚各行业标杆客户的真实落地实践，看如意AI客服如何助力企业实现服务提效与业务增长。"
      icon={Users}
    />
  );
}
