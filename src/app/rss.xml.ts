import { BASE_URL } from '@/constants/common';

const currentDate = new Date().toUTCString();

export const contentType = 'application/rss+xml';

export default function RSS(): string {
  if (process.env.DEPLOY_ENV === 'development' || process.env.DEPLOY_ENV === 'staging') return '';

  return `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title><![CDATA[코그룸 | 생각하는 방]]></title>
    <link>${BASE_URL}</link>
    <description><![CDATA[모든 이의 내적 성장을 돕습니다. 인지과학 기반 자기이해와 성장을 위한 에듀테크 지식 플랫폼 cogroom]]></description>
    <language>ko</language>
    <lastBuildDate>${currentDate}</lastBuildDate>
    <atom:link href="${BASE_URL}/rss.xml" rel="self" type="application/rss+xml"/>
    
    <item>
      <title><![CDATA[1일 1사유로 매일 성장하기]]></title>
      <link>${BASE_URL}/daily</link>
      <description><![CDATA[생각을 구조화하고, 자기성찰을 돕는 코그룸 cogroom 데일리 사유 루틴을 습관화하세요.]]></description>
      <pubDate>${currentDate}</pubDate>
      <guid>${BASE_URL}/daily</guid>
    </item>
    
    <item>
      <title><![CDATA[생각하는 사람들이 모인 곳]]></title>
      <link>${BASE_URL}/community</link>
      <description><![CDATA[코그룸 심리학 커뮤니티. 혼자서는 닿을 수 없던 깊은 성찰을 함께 나누는 공간입니다. 우리는 코그니어(cognier).]]></description>
      <pubDate>${currentDate}</pubDate>
      <guid>${BASE_URL}/community</guid>
    </item>
    
    <item>
      <title><![CDATA[생각하는 삶을 위한 지식 아카이브]]></title>
      <link>${BASE_URL}/content</link>
      <description><![CDATA[뇌과학 인지심리학 기반의 체계적인 인사이트 코그룸 콘텐츠가 당신의 일상에 확신과 방향을 더합니다.]]></description>
      <pubDate>${currentDate}</pubDate>
      <guid>${BASE_URL}/content</guid>
    </item>
  </channel>
</rss>`;
}
