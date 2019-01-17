package AH1N1.OCA.service;

import AH1N1.OCA.repo.FolderRepository;
import AH1N1.OCA.repo.entiity.Folder;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Objects;

@Service
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class FolderServiceImpl implements FolderService {

    private final FolderRepository folderRepository;

    @Override
    public List<Folder> getAllFolders() {
        return folderRepository.findAll();
    }

    @Override
    public Folder getFolder(Long folderId) {
        return folderRepository.findById(folderId).orElseThrow();
    }

    @Override
    public Folder saveFolder(Folder folder) {
        if (Objects.isNull(folder.getNotes()))
            folder.setNotes(new HashSet<>());

        return folderRepository.save(folder);
    }
}
