type Props = Readonly<{
  onClick?: () => void;
}>;
export default function NavigationItem({ onClick }: Props) {
  return (
    <>
      {/* ビジョン → View More で Value */}
      <a className="cursor-pointer" href="#vision" onClick={onClick}>
        ビジョン
      </a>
      {/* 我々ができること */}
      <a className="cursor-pointer" href="#work" onClick={onClick}>
        私たちの仕事
      </a>
      {/* お知らせ */}
      <a className="cursor-pointer" href="#info" onClick={onClick}>
        お知らせ
      </a>
      {/* 代表メッセージ, 会社情報 → View More で 事業概要 */}
      <a className="cursor-pointer" href="#company" onClick={onClick}>
        会社情報
      </a>
      {/* お問い合わせ */}
      <a className="cursor-pointer" href="#contact" onClick={onClick}>
        お問い合わせ
      </a>
    </>
  );
}
