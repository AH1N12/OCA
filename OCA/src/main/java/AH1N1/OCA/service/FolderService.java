package AH1N1.OCA.service;

import AH1N1.OCA.repo.entiity.Folder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface FolderService {


    List<Folder> getAllFolders();

    Folder getFolder(Long folderId);

    Folder saveFolder(Folder folder);
}
