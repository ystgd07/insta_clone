import Feed from './components/Feed';
import Header from './components/Header';
import UploadModal from './components/UploadModal';
export default function Home() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Feed></Feed>
            <UploadModal></UploadModal>
        </div>
    );
}
