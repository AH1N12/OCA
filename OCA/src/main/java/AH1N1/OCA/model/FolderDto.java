package AH1N1.OCA.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class FolderDto {

    private Long id;

    private String name;

    private Integer position;

    private Long categoryId;

    private List<NoteDto> notes;
}
