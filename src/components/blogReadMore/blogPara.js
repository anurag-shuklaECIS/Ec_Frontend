import styles from '../../styles/post-body.module.css';

export default function PostBody({ content }) {
  return (
    <div className="max-w-2xl mx-auto">
      <pre
        style={{ fontFamily: 'jost', whiteSpace: 'pre-wrap' }}
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
